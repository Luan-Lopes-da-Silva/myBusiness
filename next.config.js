module.exports={
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                port: ''
            }
        ]
    },
    env:{
        MY_SERVICE_ID : process.env.MY_SERVICE_ID,
        MY_TEMPLATE_ID : process.env.MY_TEMPLATE_ID
    }
}
