export const All_menus=[
    {title:'后台首页',
    url:'./content',
    children:[
    ]},
    {title:'我的面板',
    url:'',
    children:[
        {name:'个人信息',url:'./userinfo'},
        {name:'修改密码',url:'./password'},
        {name:'日志信息',url:'./loginfo'}
    ]},
    {title:'系统设置',
    url:'',
    children:[
        {name:'用户管理',url:'./user-management'},
        {name:'角色管理',url:'./rule-management'},
        {name:'菜单管理',url:'./list-management'},
        {name:'系统参数配置',url:'./sys-option-management'},
        {name:'系统配置管理',url:'./sys-config-management'},
    ]},
    {title:'项目文档',
    url:'',
    children:[
        {name:'项目图标示例',url:'./project-demo'},
        {name:'文档参数说明',url:'./text-option'}
    ]},
  ]