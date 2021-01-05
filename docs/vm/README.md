---
sidebar: auto
footer: MIT Licensed and CC BY 4.0 | Copyright © 2020-present Bervianto Leo Pratama
---

# Azure VM

## Enable Disk Encryption

<code-group>
<code-block title="Azure CLI">
```bash
az vm encryption enable \
    --resource-group <resource-group> \
    --name <vm-name> \
    --disk-encryption-keyvault <keyvault-name> \
    --volume-type [all | os | data]
```
</code-block>

<code-block title="Powershell">
```powershell
Set-AzVmDiskEncryptionExtension `
	-ResourceGroupName <resource-group> `
  -VMName <vm-name> `
  -VolumeType [All | OS | Data]
	-DiskEncryptionKeyVaultId <keyVault.ResourceId> `
	-DiskEncryptionKeyVaultUrl <keyVault.VaultUri> `
  -SkipVmBackup
```
</code-block>
</code-group>

## View the status of the disk

<code-group>
<code-block title="Azure CLI">
```bash
az vm encryption show --resource-group <resource-group> --name <vm-name>
```
</code-block>

<code-block title="Powershell">
```powershell
Get-AzVmDiskEncryptionStatus  -ResourceGroupName <resource-group> -VMName <vm-name>
```
</code-block>
</code-group>

## Decrypting drives

<code-group>
<code-block title="Azure CLI">
```bash
az vm encryption disable --resource-group <resource-group> --name <vm-name>
```
</code-block>

<code-block title="Powershell">
```powershell
Disable-AzVMDiskEncryption -ResourceGroupName <resource-group> -VMName <vm-name>
```
</code-block>
</code-group>

## Run template deployment

<code-group>
<code-block title="Azure CLI">
```bash
az group deployment create --resource-group <my-resource-group> --name <my-deployment-name> \
    --template-uri https://raw.githubusercontent.com/azure/azure-quickstart-templates/master/201-encrypt-running-windows-vm-without-aad/azuredeploy.json
```
</code-block>

<code-block title="Powershell">
```powershell
New-AzResourceGroupDeployment `
    -Name encrypt-disk `
    -ResourceGroupName <resource-group-name> `
    -TemplateUri https://raw.githubusercontent.com/azure/azure-quickstart-templates/master/201-encrypt-running-windows-vm-without-aad/azuredeploy.json
```
</code-block>
</code-group>