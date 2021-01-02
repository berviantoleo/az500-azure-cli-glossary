---
sidebar: auto
footer: MIT Licensed and CC BY 4.0 | Copyright © 2020-present Bervianto Leo Pratama
---

# Azure RBAC

## Review built-in roles

<code-group>
<code-block title="Azure CLI">
```bash
az role definition list --name "Virtual Machine Contributor" --output json | jq '.[] | .permissions[0].actions'
```
</code-block>

<code-block title="Powershell">
```powershell
Get-AzRoleDefinition -Name "Virtual Machine Contributor" | Select Actions | ConvertTo-Json
```
</code-block>
</code-group>

## Find resource provider operations

<code-group>
<code-block title="Azure CLI">
```bash
az provider operation show
```
</code-block>

<code-block title="Powershell">
```powershell
Get-AzProviderOperation */virtualMachines/*
```
</code-block>
</code-group>

## Create Role

<code-group>
<code-block title="Azure CLI">
```bash
az role definition create --role-definition vm-operator-role.json
```
</code-block>

<code-block title="Powershell">
```powershell
New-AzRoleDefinition -InputFile "vm-operator-role.json"
```
</code-block>
</code-group>

## Update Role

<code-group>
<code-block title="Azure CLI">
```bash
az role definition update --role-definition "<<path-to-json-file>>"
```
</code-block>

<code-block title="Powershell">
```powershell
Set-AzRoleDefinition -InputFile "<<path-to-json-file>>"
```
</code-block>
</code-group>

## View Custom Role

<code-group>
<code-block title="Azure CLI">
```bash
az role definition list --custom-role-only true --output json | jq '.[] | {"roleName":.roleName, "roleType":.roleType}'
```
</code-block>

<code-block title="Powershell">
```powershell
Get-AzRoleDefinition | ? {$_.IsCustom -eq $true} | FT Name, IsCustom
```
</code-block>
</code-group>

## View Role Definition

<code-group>
<code-block title="Azure CLI">
```bash
az role definition list --name "Virtual Machine Operator"
```
</code-block>

<code-block title="Powershell">
```powershell
Get-AzRoleDefinition "Virtual Machine Operator"
```
</code-block>
</code-group>

## View Custom Role Assignment

<code-group>
<code-block title="Azure CLI">
```bash
az role assignment list --role "Virtual Machine Operator"
```
</code-block>

<code-block title="Powershell">
```powershell
Get-AzRoleAssignment -RoleDefinitionName "Virtual Machine Operator"
```
</code-block>
</code-group>

## Delete Role

<code-group>
<code-block title="Azure CLI">
```bash
az role definition delete --name "role name"
```
</code-block>

<code-block title="Powershell">
```powershell
Get-AzRoleDefinition "role name" | Remove-AzRoleDefinition
```
</code-block>
</code-group>

## Assign Role

```bash
az role assignment create --assignee "<UPN>" --role "Virtual Machine Operator"
```

## Assign Role 2

<code-group>
<code-block title="Azure CLI">
```bash
az role assignment create \
    --assignee rbacuser@example.com \
    --role "Owner" \
    --subscription <subscription_name_or_id>
```
</code-block>

<code-block title="Powershell">
```powershell
New-AzRoleAssignment `
    -SignInName rbacuser@example.com `
    -RoleDefinitionName "Owner" `
    -Scope "/subscriptions/<subscriptionID>"
```
</code-block>
</code-group>

## Remove Assignment Role

<code-group>
<code-block title="Azure CLI">
```bash
az role assignment delete --role "role name"
```
</code-block>

<code-block title="Powershell">
```powershell
Remove-AzRoleAssignment -ObjectId <object_id> -RoleDefinitionName "role name" -Scope /subscriptions/<subscription_id>
```
</code-block>
</code-group>
