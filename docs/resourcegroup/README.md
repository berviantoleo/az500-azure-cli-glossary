---
sidebar: auto
footer: MIT Licensed and CC BY 4.0 | Copyright © 2020-present Bervianto Leo Pratama
---

# Resource Group

## Create Resource Group

<code-group>
<code-block title="Azure CLI">
```bash
az group create --name <name> --location <location>
```
</code-block>

<code-block title="Powershell">
```powershell
New-AzResourceGroup -Name vm-networks -Location "EastUS"
```
</code-block>
</code-group>

## Resource Group List

```bash
az group list
```

## Clean Up Resource Group by Name

```bash
az group delete --name <resource group name> --no-wait --yes
```

## Resource

### Tag Resource

```bash
az resource tag --tags Department=Finance \
    --resource-group msftlearn-core-infrastructure-rg \
    --name msftlearn-vnet1 \
    --resource-type "Microsoft.Network/virtualNetworks"
```