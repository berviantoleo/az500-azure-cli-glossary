---
sidebar: auto
footer: MIT Licensed and CC BY 4.0 | Copyright © 2020-present Bervianto Leo Pratama
---

# Azure Virtual Network

## Create a subnet and virtual network

```powershell
$Subnet=New-AzVirtualNetworkSubnetConfig -Name default -AddressPrefix 10.0.0.0/24

New-AzVirtualNetwork -Name myVnet -ResourceGroupName vm-networks -Location $Location -AddressPrefix 10.0.0.0/16 -Subnet $Subnet
```

## Create the VPN gateway

```powershell
New-AzVirtualNetworkGateway -Name $GWName -ResourceGroupName $ResourceGroup `
-Location $Location -IpConfigurations $ipconf -GatewayType Vpn `
-VpnType RouteBased -EnableBgp $false -GatewaySku VpnGw1 -VpnClientProtocol "IKEv2"
```

## Upload the root certificate public key information

```powershell
Add-AzVpnClientRootCertificate -VpnClientRootCertificateName $P2SRootCertName -VirtualNetworkGatewayname $GWName -ResourceGroupName $ResourceGroup -PublicCertData $CertBase64
```

## Configure the native VPN client

```powershell
$profile = New-AzVpnClientConfiguration -ResourceGroupName $ResourceGroup -Name $GWName -AuthenticationMethod "EapTls"

$profile.VPNProfileSASUrl
```

## Network Security Group

### Create Network Security Group

```bash
az network nsg create \
  --resource-group <resource-group-name> \
  --name "<nsg name>"
```

### Create NSG rule (for SSH)

```bash
az network nsg rule create \
    --resource-group <resource group name> \
    --nsg-name <nsg name> \
    --name AllowSSHRule \
    --direction Inbound \
    --priority 100 \
    --source-address-prefixes '*' \
    --source-port-ranges '*' \
    --destination-address-prefixes '*' \
    --destination-port-ranges 22 \
    --access Allow \
    --protocol Tcp \
    --description "Allow inbound SSH"
```

## Application Gateway

### Certificate configuration in Application Gateway v1

```bash
az network application-gateway auth-cert create \
    --resource-group <resource group name> \
    --gateway-name <application gateway name> \
    --name <certificate name> \
    --cert-file <path to authentication certificate>
```

### Certificate configuration in Application Gateway v2

```bash
az network application-gateway root-cert create \
      --resource-group <resource group name> \
      --gateway-name <application gateway name> \
      --name <certificate name> \
      --cert-file <path to trusted CA certificate>
```

### HTTP settings

```bash
az network application-gateway http-settings create \
    --resource-group <resource group name> \
    --gateway-name <application gateway name> \
    --name <HTTPS settings name> \
    --port 443 \
    --protocol Https \
    --auth-certs <certificate name>
```

### Create a frontend port

```bash
az network application-gateway frontend-port create \
    --resource-group <resource group name> \
    --gateway-name <application gateway name>  \
    --name <port name>
    --port 443
```

### Configure a listener

```bash
az network application-gateway ssl-cert create \
   --resource-group <resource group name> \
   --gateway-name <application gateway name> \
   --name <ssl certificate name> \
   --cert-file <SSL certificate file (PFX)> \
   --cert-password <password for certificate file>
```

```bash
az network application-gateway http-listener create \
    --resource-group <resource group name> \
    --gateway-name <application gateway name> \
    --name <listener name> \
    --frontend-port <frontend port name> \
    --ssl-cert <ssl certificate name>
```

## Define a rule to send HTTPS requests to the servers

```bash
az network application-gateway rule create \
    --resource-group <resource group name> \
    --gateway-name <application gateway name> \
    --name <rule name> \
    --address-pool <backend pool> \
    --http-listener <listener name> \
    --http-settings <HTTPS settings name> \
    --rule-type Basic
```

## Network Watcher

### Enable Network Watcher for your region

```bash
az network watcher configure \
--locations westus \
--enabled true \
--resource-group $RG
```

## VM Relate

### Get Public IP Address from VM

```powershell
Get-AzPublicIpAddress -Name "VM Name"
```

### Disassociate Default IP Address from the VM

```powershell
$nic = Get-AzNetworkInterface -Name dataProcStage2 -ResourceGroup vm-networks

$nic.IpConfigurations.publicipaddress.id = $null

Set-AzNetworkInterface -NetworkInterface $nic
```