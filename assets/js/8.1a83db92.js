(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{365:function(a,s,t){"use strict";t.r(s);var e=t(25),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"azure-ad"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#azure-ad"}},[a._v("#")]),a._v(" Azure AD")]),a._v(" "),t("h2",{attrs:{id:"users"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#users"}},[a._v("#")]),a._v(" Users")]),a._v(" "),t("h3",{attrs:{id:"create-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-user"}},[a._v("#")]),a._v(" Create User")]),a._v(" "),t("code-group",[t("code-block",{attrs:{title:"Azure CLI"}},[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Create User")]),a._v("\naz ad user create --display-name "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<name>"')]),a._v(" --password "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<password>"')]),a._v(" --user-principal-name "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("user principalname"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Verify")]),a._v("\naz ad user list --output table\n")])])])]),a._v(" "),t("code-block",{attrs:{title:"Powershell"}},[t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Create Password Object")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$passwordProfile")]),a._v(" = "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("New-Object")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("TypeName Microsoft"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Open"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("AzureAD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Model"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("PasswordProfile\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Fill the password")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$passwordProfile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Password = "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'<password>'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Make sure always connect to Azure AD")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("Connect-AzureAD")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# (Optional) Getting domain")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$domainName")]),a._v(" = "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("Get-AzureAdTenantDetail")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("VerifiedDomains"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Name\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Create Account/User")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("New-AzureADUser")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("DisplayName "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'<name>'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("PasswordProfile "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$passwordProfile")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("UserPrincipalName "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<username>@'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$domainName")]),a._v('"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("AccountEnabled "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("$true")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("MailNickName "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'<mail nickname>'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Verify")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("Get-AzureADUser")]),a._v("\n")])])])])],1),a._v(" "),t("h2",{attrs:{id:"groups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#groups"}},[a._v("#")]),a._v(" Groups")]),a._v(" "),t("h3",{attrs:{id:"create-group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-group"}},[a._v("#")]),a._v(" Create Group")]),a._v(" "),t("code-group",[t("code-block",{attrs:{title:"Azure CLI"}},[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Create group")]),a._v("\naz ad group create --display-name "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<group name>"')]),a._v(" --mail-nickname "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<mail nickname>"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Verify")]),a._v("\naz ad group list -o table\n")])])])]),a._v(" "),t("code-block",{attrs:{title:"Powershell"}},[t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Create Group")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("New-AzureADGroup")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("DisplayName "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'<group name>'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("MailEnabled "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("$false")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("SecurityEnabled "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("$true")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("MailNickName <mail nickname>\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Verify")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("Get-AzureADGroup")]),a._v("\n")])])])])],1),a._v(" "),t("h3",{attrs:{id:"add-user-as-member-at-a-group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-user-as-member-at-a-group"}},[a._v("#")]),a._v(" Add User as Member at a Group")]),a._v(" "),t("code-group",[t("code-block",{attrs:{title:"Azure CLI"}},[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Add member to group")]),a._v("\naz ad group member "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" --group "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<group name>"')]),a._v(" --member-id "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("member id"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Verify")]),a._v("\naz ad group member list --group "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<group name>"')]),a._v("\n")])])])]),a._v(" "),t("code-block",{attrs:{title:"Powershell"}},[t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Get the user")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$user")]),a._v(" = "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("Get-AzureADUser")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Filter")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"MailNickName eq '<mail nickname>'\"")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Add Member")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("Add-AzADGroupMember")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("MemberUserPrincipalName "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("userPrincipalName "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("TargetGroupDisplayName "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<group display name>"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Verify the Member")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("Get-AzADGroupMember")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("GroupDisplayName "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<group display name>"')]),a._v("\n")])])])])],1)],1)}),[],!1,null,null,null);s.default=r.exports}}]);