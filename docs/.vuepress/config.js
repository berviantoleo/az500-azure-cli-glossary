module.exports = {
  title: 'Azure CLI Glossary',
  description: 'Preparation for AZ-500, collection of usefull command to have more knowledge and pass your certification!',
  plugins: ['@vuepress/back-to-top', '@vuepress/last-updated', '@vuepress/active-header-links'],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Common', ariaLabel: 'Common', items: [
          { text: 'Common Command', link: '/common/' },
          { text: 'Resource Group', link: '/resourcegroup/' },
        ]
      },
      {
        text: 'Security', ariaLabel: 'Security', items: [
          { text: 'Azure Policy', link: '/policy/'},
          { text: 'Azure RBAC', link: '/azurerbac/'},
          { text: 'Key Vault', link: '/keyvault/' }
        ]
      },
      { text: 'Github', link: 'https://github.com/berviantoleo/az500-azure-cli-glossary' }
    ]
  },
  base: process.env.BASE_URL || "/",
}