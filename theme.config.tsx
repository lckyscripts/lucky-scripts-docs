import type { NavItem, DocsThemeConfig } from 'nextra-theme-docs'

const navItems: NavItem[] = [
  {
    title: 'Store',
    href: 'https://lucky-scripts.tebex.io/',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/lckyscripts',
  },
  {
    title: 'Discord',
    href: 'https://discord.gg/Hq34KyH3pc',
  },
]

const config: DocsThemeConfig = {
  logo: (
    <div style={{ fontWeight: 'bold', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span>🎲</span>
      <span>LuckyScripts</span>
    </div>
  ),
  project: {
    link: 'https://github.com/lckyscripts/lucky-scripts-docs',
  },
  docsRepositoryBase: 'https://github.com/lckyscripts/lucky-scripts-docs/blob/main',
  footer: {
    text: '© 2024 LuckyScripts. All rights reserved.',
  },
  head: () => {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="LuckyScripts FiveM Resources Documentation" />
        <link rel="icon" href="/favicon.ico" />
      </>
    )
  },
  primaryHue: 200,
  primaryColor: '#22c55e',
  navbar: {
    items: navItems,
  },
}

export default config