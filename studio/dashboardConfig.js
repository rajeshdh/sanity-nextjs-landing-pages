export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d67bda335b52dbc787bfb2e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3irgsgo3',
                  apiId: '7b4f5a20-77a1-49c7-a44b-0fc8c910bbf9'
                },
                {
                  buildHookId: '5d67bda35c4a1d6d4751e274',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-r1pmmkve',
                  apiId: 'c40ff896-f3fc-4c0e-9b58-c14f0d800b92'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rajeshdh/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-r1pmmkve.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
