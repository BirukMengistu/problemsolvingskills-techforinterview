export const Files ={
    childern:[
        {name:'src', 
        childern:[
          {
            name:'header',
            type:'folder'
          },
          {
            name:'page',
            type:'folder'
          },
          {
            name:'style',
            type:'folder'
          }
        ]
           
        },
        {name:'Public',
         type:'folder',
        childern:[
            {name:'package.json',
             type:'file' }]},
        {name:'node_module' , 
        childern:[
            {name:'package.json',
             type:'file' }
        ]}
    ]
}