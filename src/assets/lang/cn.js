export const message = {
    logo: 'irisnet.png',
    floatWindow:{
      title:'论坛',
    },
    header:{
        left:[
            {
                id:0,
                title:'白皮书',
                active:false,
            },
            {
                id:1,
                title:'合作方',
                active:false,
            },
            {
                id:2,
                title:'社区',
                active:false,
            }
        ],
        right:[
            {
                id:0,
                title:'主网',
                href:'',
                active: false,
            },
            {
                id:1,
                title:'文档',
                href:'https://www.irisnet.org/docs/',
                active: false,
            },
            {
                id:2,
                title:'论坛',
                href:'https://forum.irisnet.org/',
                active: false,
            },
            {
                id:3,
                title:'博客',
                href:'https://medium.com/irisnet-blog',
                active: false,
            },
        ],
        mobileNavigation:[
            {
                id:0,
                title:'主网',
                activeIndex: '',
                active:false,
            },
            {
                id:1,
                title:'测试网',
                activeIndex: '',
                active:false,
            },
            {
                id:2,
                title:'白皮书',
                activeIndex: 0,
                active:false,
            },
            {
                id:3,
                title:'路线图',
                activeIndex: 3,
                active:false,
            },
            {
                id:4,
                title:'合作方',
                activeIndex: 1,
                active:false,
            },
            {
                id:5,
                title:'社区',
                activeIndex: 2,
                active:false,
            },
           
        ],
        mobileLinkHrefNavigation:[
            {
                id: 0,
                title:'文档',
                href: "https://www.irisnet.org/docs/",
            },
            {
                id:1,
                title:'论坛',
                href: "https://forum.irisnet.org/",
                activeIndex: '',
            },{
                id: 2,
                title:'博客',
                href: "https://medium.com/irisnet-blog",
            },
        ]
    },
    footer:{
        socialCommunityTitle: '社区',
        validatorCommunityTitle:'验证人',
        TechCommunityTitle: '开发者',
        socialCommunity:[
            {
                id:0,
                src: "irisnet_telegram.png",
                href: "https://t.me/irisnetworkcn"
            },
            {
                id:1,
                src: "irisnet_twitter.png",
                href: "https://twitter.com/irisnetwork"
            },
            {
                id:2,
                src: "irisnet_mail.png",
                href: "mailto:contact@irisnet.org"
            },
            {
                id:3,
                src: "irisnet_medium.png",
                href: "https://medium.com/irisnet-blog"
            },
            {
                id:4,
                src: "irisnet_wechat.png",
                "txt": "Wechat"
            },
            {
                id:5,
                src: "irisnet_weibo.png",
                href: "https://weibo.com/u/6455513027"
            },
        ],
        validatorCommunity:[
            {
                id:0,
                src: "irisnet_qq.png",
                href: "http://qm.qq.com/cgi-bin/qm/qr?k=95CgDIPMXy5ZLEPF1pvd9GEh7ldWRI32"
            },
            {
                id:1,
                src: "irisnet_riot.png",
                href: "https://riot.im/app/#/room/#irisvalidators:matrix.org"
            },
        ],
        techCommunity:[
            {
                id:0,
                src: "irisnet_github.png",
                href: "https://github.com/irisnet"
            },
            {
                id:1,
                src: "irisnet_qq.png",
                href: "https://jq.qq.com/?_wv=1027&k=51eKP77"
            },
            {
                id:2,
                src: "irisnet_riot.png",
                href: "https://riot.im/app/#/room/#iris:matrix.org"
            },
        ],
        productList: [
            {
                id:0,
                name:'Rainbow Wallet',
                href:'https://www.rainbow.one/'
            },
            {
                id:1,
                name:'IRISplorer',
                href:'https://www.irisplorer.io'
            },
            {
                id:2,
                name:'Light Client',
                href:'https://www.irisnet.org/docs/zh/light-client/'
            },
            {
                id:3,
                name:'CLI Client',
                href:'https://www.irisnet.org/docs/zh/cli-client/'
            }
        ],
        resourceList: [
            {
                id:0,
                name:'FAQ',
                href:'https://www.irisnet.org/docs/resources/'
            },
            {
                id:1,
                name:'Blog',
                href:'https://medium.com/irisnet-blog'
            },
            {
                id:2,
                name:'Docs',
                href:'https://www.irisnet.org/docs/zh/'
            },
            {
                id:3,
                name:'Press Kit',
                href:'/community/press-kit'
            }
        ],
        productsTitle:'产品',
        resourcesTitle:'资源',
        submitBtn:{
            title: '获取最新资讯',
            subscribe: '提交',
            success: "Success"
        },
        errEmailAddress:{
            error:'Please enter a valid email address'
        },
        irisnetInproduction:'IRISnet以希腊彩虹女神Iris命名，她是在人间和天堂之间传递信息的忠诚使者'
    },
    home: {
        sectionOne: {
            title: 'IRIS Network',
            time: '2019.03.01 主网启动',
            shareUrl: {
                telegramUrl: 'https://t.me/irisnetworkcn',
                githubUrl: 'https://github.com/irisnet/irishub',
                weChatUrl: ''
            },
            button: {
                buttonName: {
                    rainbowName: 'Rainbow 钱包',
                    explorerName: 'IRIS 浏览器'
                },
                buttonUrl: {
                    rainbowUrl: 'https://www.rainbow.one/',
                    explorerUrl: 'https://www.irisplorer.io'
                }
            }
        },
        irisnetBianJie:{
            commission:'佣金率',
            development:'由IRISnet核心开发团队维护的 Cosmos Hub 创世节点',
            button:{
                buttonName: {
                    rainbowName: 'Rainbow 钱包',
                    explorerName: '了解更多'
                },
                buttonUrl: {
                    rainbowUrl: 'https://www.rainbow.one/',
                    explorerUrl: '/irisnet-bianjie'
                }
            }
        },
        sectionTwo: {
            KeyInnovations: {
                title: '核心创新',
                list: [
                    {id: 0, msg: '将面向服务的基础设施融入到Cosmos网络中'},
                    {id: 1, msg: '整合由异构系统提供的商业服务，包括公共链、联盟链以及现有系统'},
                    {id: 2, msg: '通过区块链互联网实现服务的互联互通'}
                ],
                buttonMsg: '白皮书',
                WHITEPAPERUrl: 'https://github.com/irisnet/irisnet/blob/master/WHITEPAPER.md'
            },
            NetworkDesign: {
                title: '网络设计',
                list: [
                    {id: 0, msg: '通过标准的ABCI交易实现IRIS服务（也称为iServices）的注册，绑定，调用，查询，分析和管理'},
                    {id: 1, msg: 'iService提供商充当公共链、联盟区块链以及现有企业系统中业务逻辑的适配器'},
                    {id: 2, msg: '可以通过扩展的IBC协议在区块链互联网中调用iServices'}]
            }
        },
        sectionThree: {
            title: '路线图',
            road: [
                {id: 0, caption: '后羿', time: '2020年1月之后', msg: '第四阶段，通过不懈的技术创新，完善的社区建设和开发者的积极参与，实现分布式的商业生态系统。'},
                {id: 1, caption: '夸父', time: '2019年10月 - 2019年12月', msg: '第三阶段，主要专注于完成IRIS网络的增强功能，升级网络以支持复杂的IRIS服务管理功能，如分析和争议解决功能; 不断完善SDK和手机客户端; 加速拓展网络，连接更多分区，整合更多服务提供商。'},
                {id: 2, caption: '女娲', time: '2019年4月 - 2019年9月', msg: '第二阶段，我们为开发者准备了beta版的IRIS SDK，并会升级移动客户端以支持iServices；与应用专有链项目形成战略联盟，支持它们作为分区连接到IRIS Hub；IRISnet也将在第二阶段完成和Cosmos Hub的链接，打通和以太坊生态的链接。'},
                {id: 3, caption: '盘古', time: '2018年1月- 2019年3月', msg: 'IRISnet项目的第一阶段，我们专注于构建并启动IRIS Hub；发布一个初始版本的IRIS网络移动客户端，并建立IRISnet基本服务层：升级网络以实现服务定义、绑定、调用和查询；会与1-2两个生态伙伴展开合作，在跨链枢纽IRIS Hub上发布iServices。'}
            ]
        },
        sectionFour: {
            Collaboration: '合作方',
            CoreDevelopmentTeams: {
                title: '核心开发团队',
                logos: [
                    {id:0, path: 'logos/irisnet_bianjiehover.png', url: 'https://www.bianjie.ai/'},
                    {id:1, path: 'logos/irisnet_tenderminthover.png', url: 'https://tendermint.com/'}
                ]
            },
            StrategicPartners: {
                title: '战略合作伙伴',
                logos: [
                    {id:0, path: 'logos/irisnet_InTERCHAIN.png', url: 'https://cosmos.network/about'},
                   
                    {id:3, path: 'logos/irisnet_HASHKEY.png', url: 'https://www.hashkey.com/#/'}
                ]
            },
            EcosystemPartners: {
                title: '生态合作伙伴',
                logos: [
                    {id:0, path: 'logos/irisnet_Platonlogo.png', url: 'https://www.platon.network/#/index'},
                    {id:1, path: 'logos/irisnet_axonomy.png', url: 'https://www.axonomy.pro'},
                    {id:2, path: 'logos/irisnet_Gdex.png', url: 'https://www.gdex.io/'},
                    {id:3, path: 'logos/irisnet_hashgardhover.png', url: 'https://www.hashgard.io/#/'}
                ]
            },
            Institutional: {
                title: {msg1: '支持机构', msg2: '(排名不分先后)'},
                logos: [
                    {id:0, path: 'logos/irisnet_AminoCapital.png', url: 'http://www.aminocapital.com/'},
                    {id:1, path: 'logos/irisnet_Bibox.png', url: 'https://www.bibox.com/'},
                    {id:2, path: 'logos/irisnet_huobi.png', url: 'https://www.hbg.com/en-us/capital/'},
                    {id:3, path: 'logos/irisnet_GBIC.png', url: 'https://gbic.io/'},
                    {id:4, path: 'logos/irisnet_8decim.png', url: 'javascript:void(0)'},
                    {id:5, path: 'logos/irisnet_bihu.png', url: 'https://bihu.com/'},// 1
                    {id:7, path: 'logos/irisnet_BKfund.png', url: 'javascript:void(0)'},
                    {id:8, path: 'logos/irisnet_byz.png', url: 'javascript:void(0)'},
                    {id:9, path: 'logos/irisnet_ChainPE.png', url: 'http://www.chainpe.com/'},
                    {id:10, path: 'logos/irisnet_CP.png', url: 'https://chainpool.io/'},
                    {id:11, path: 'logos/irisnet_COEFFICIENT.png', url: 'http://coefficient.network/'},// 2
                    {id:12, path: 'logos/irisnet_gongshi.png', url: 'http://consensuscapital.ca/'},
                    {id:13, path: 'logos/irisnet_dushu.png', url: 'javascript:void(0)'},
                    {id:14, path: 'logos/irisnet_genblock.png', url: 'https://genblock.capital/'},
                    {id:15, path: 'logos/irisnet_HAYEK.png', url: 'javascript:void(0)'},
                    {id:16, path: 'logos/irisnet_INK.png', url: 'http://ink.one/'},
                    {id:17, path: 'logos/irisnet_LINKVCcopy.png', url: 'http://www.linkvc.com/'},// 3
                    {id:18, path: 'logos/irisnet_MediSHares.png', url: 'http://medishares.org/'},
                    {id:19, path: 'logos/irisnet_jieshi.png', url: 'http://www.milestonevc.com/index.html'},
                    {id:20, path: 'logos/irisnet_nirvana-logo-white.png', url: 'http://nirvana.capital/'},
                    {id:21, path: 'logos/irisnet_NGC.png', url: 'http://ngc.fund/'},
                    {id:22, path: 'logos/irisnet_origin.png', url: 'http://www.theorigincapital.com/'},
                    {id:23, path: 'logos/irisnet_SatoshiFUnd.png', url: 'https://satoshi.fund/'},// 4
                    {id:24, path: 'logos/irisnet_guigu.png', url: 'http://www.svinsight.com/'},
                    {id:25, path: 'logos/irisnet_shicuo.png', url: 'javascript:void(0)'},
                    {id:26, path: 'logos/irisnet_huixiang.png', url: 'javascript:void(0)'},
                    {id:27, path: 'logos/irisnet_Unetwork.png', url: 'https://u.network/'},
                    {id:28, path: 'logos/irisnet_jiuhe.png', url: 'http://www.unityvc.com/'},
                    {id:29, path: 'logos/irisnet_UA.png', url: 'javascript:void(0)'},//5
                    {id:30, path: 'logos/irisnet_shuidi.png', url: 'http://waterdrip.io/'},
                    {id:31, path: 'logos/irisnet_yidao.png', url: 'javascript:void(0)'},
                    {id:32, path: 'logos/irisnet_snz.png', url: 'http://snzholding.com/'},
                ]
            }
        }
    },
    mainnet:{
        title: 'IRIS Network',
        production: '下一代分布式应用的跨链服务网络——自进化的BPoS区块链',
        wallet: 'Rainbow 钱包',
        walletHref:'https://www.rainbow.one/',
        explorer: 'IRIS 浏览器',
        explorerHref:'https://www.irisplorer.io/',
        leftContent:{
            wallet:{
                title:'钱包',
                logo:'IRISnet_mainnnet_wallet.png',
                list:[
                    {
                        name:'Math Wallet',
                        href:'http://www.mathwallet.org/cn/',
                    },
                    {
                        name:'Wetez',
                        href:'https://www.wetez.io/pc/homepage',
                    }
                ]
            },
            explorer:{
                title:'浏览器',
                logo:'IRISnet_mainnet_explorer.png',
                list:[
                    {
                        name:'IRISnet-Overview',
                        href:'https://www.irisplorer.io/#/validators'
                    },
                    {
                        name:'Big-Dipper',
                        href:'https://iris.bigdipper.live/'
                    },
                    {
                        name:'IRISnet-P2P',
                        href:'https://irisnet.p2p.org'
                    },
                    {
                        name:'Hubble',
                        href:'https://hubble.figment.network/iris/chains/irishub'
                    }
                ]
            }
        }
    },
    announcements:{
        title: '公告',
        viewMore: '查看更多',
        viewMoreHref:'https://github.com/irisnet/iris-foundation/blob/master/README.md',
        betaTitle:'IRISnet的公开地址',
        betaContent:'IRIS基金会和开发团队的地址',
        readMore:'Read more',
        readMoreHref:'https://github.com/irisnet/iris-foundation/blob/master/iris-public-token-address_cn.md',
        betaDate:'2019年3月2日',
        announcementList:[
            {
                id:'0',
                href:'https://forum.irisnet.org/t/iris/184',
                date:'2019年6月28日',
                title:'公告 | IRIS基金会第一次执行通证销毁计划',
                content:'2019年6月28日，IRIS基金会通过两笔交易按计划执行了第一次销毁，共销毁了19,189,722 个 IRIS 通证，目前 IRIS 通证的总量为20亿个。'
            },
            {
                id:'1',
                href:'https://forum.irisnet.org/t/rainbow-v2-0-atom/166',
                date:'2019年6月21日',
                title:'Rainbow发布v2.0，新增支持ATOM钱包',
                content:'Rainbow v2.0于2019年6月21日发布，接入第二条公链Cosmos Hub，新增ATOM钱包功能。'
            },
            {
                id:'2',
                href:'https://forum.irisnet.org/t/irisnet-tendermint/44',
                date:'2019年5月13日',
                title:'IRISnet & Tendermint携手加速开源区块链技术发展',
                content:'Cosmos 核心开发团队Tendermint 宣布IRISnet 为首要生态合作伙伴。'
            },
            {
                id:'3',
                href:'https://forum.irisnet.org/t/iris-foundation/37',
                date:'2019年5月12日',
                title:'IRIS Foundation 节点委托标准的说明',
                content:'基金会选择验证人节点的标准做出了公开说明。'
            },
           
        ]
    },
    testnet:{
        fuxi:{
            title:'伏羲测试网',
            production: '伏羲测试网跟IRISnet主网运行相同的软件，为开发者社区提供稳定的测试环境（包括钱包、浏览器、服务提供者/消费者）。',
            testnetLink:'使用伏羲测试网',
            testnetExplorerTitle:'测试网浏览器',
            testnetExplorerHref:'https://testnet.irisplorer.io/',
            href:'https://www.irisnet.org/docs/zh/get-started/Join-the-Testnet.html'
        },
        nyancat:{
            title:'彩虹猫测试网',
            production:'彩虹猫测试网通常运行比IRISnet主网更新版本，重点是在新版本发布到生产环境之前，为验证人提供参与网络共识、治理升级的验证测试环境。',
            testnetLink:'使用彩虹猫测试网',
            testnetExplorerTitle:'彩虹猫浏览器',
            testnetExplorerHref:'http://nyancat.irisplorer.io/',
            href:'https://github.com/irisnet/testnets/tree/master/nyancat'
        }
    },
    community:{
        title: '社区',
        joinWay:[
            {
                id:'1',
                src:'irisnet_community_riot.png',
                name: 'Riot聊天室',
                linkName:'#iris:matrix.org',
                href: 'https://riot.im/app/#/room/#iris:matrix.org'
            },
            {
                id:'2',
                src:'irisnet_community_qq.png',
                name: 'QQ 群',
                linkName:'795301695',
                href: 'https://jq.qq.com/?_wv=1027&k=51eKP77'
            }
        ]
    },
    testnetPage:{
        title: '伏羲测试网',
        section:[
            {
                content:'伏羲测试网络经过数次迭代已经完成了使命。'
            },
            {
                content:'2019年2月，IRISnet开发团队发布了irishub v0.12.0，并成功启动了新的测试网络 (chain-id : fuxi)。'
            },
            {
                content:'伏羲测试网跟IRIS主网运行相同的软件，为开发者社区提供稳定的测试环境（包括钱包、浏览器、服务提供者/消费者）。'
            }
        ],
        joinTitle:'如何使用伏羲测试网',
        joinHref:'https://www.irisnet.org/docs/zh/get-started/Join-the-Testnet.html',
        faqTitle:'IRIShub常见问题',
        faqHref:'https://www.irisnet.org/docs/zh/introduction/',
        explorerTitle:'测试网浏览器 IRISplorer',
        explorerHref:'https://testnet.irisplorer.io',
        walletTitle:'测试网钱包 Rainbow',
        walletHref:'https://testnet.rainbow.one/'
    },
    newsLetter:{
        successTitle: '欢迎订阅IRISnet通讯',
        failedTitle: '订阅失败。',
        successText: '感谢您并对我们的项目感兴趣并加入订阅。\n' +
        '请检查您的收件箱，点击确认，开始接收我们的通讯和其他最新的更新。',
        failedText: '也许您已经订阅过了?\n' +
        '\n' +
        '如果没有，请再试一次或通过电子邮件contact@irisnet.org联系我们。',
        confirm: '确认'
    },
    communityPage:{
        pressKitContent:{
            title: '品牌资料',
            downloadTitle: '获取您可能需要的所有品牌资源和标志',
            downloadBtn: '资源目录',
            downloadHref:'https://www.irisnet.org/resources/'
        },
        ColorsContent:{
            title: '标志用色',
            colors:[
                {
                    color: '#009DDE'
                },
                {
                    color: '#694D9F'
                },
                {
                    color: '#ED3554'
                },
                {
                    color: '#2E3148'
                }
            ]
        },
        Standard:{
            title: '标志',
            StandardList:[
                {
                    id: 0,
                    imgUrl: 'presskit/irisnet_logo_black.png',
                    pngUrl: 'presskit/IRISNet rebrand Horizontal-black.png',
                    pngTitle: 'png',
                    svgUrl: 'presskit/IRISNet rebrand Horizontal-black.svg',
                    svgTitle: 'svg'
                },
                {
                    id: 1,
                    imgUrl: 'presskit/irisnet_logo_white.png',
                    pngUrl: 'presskit/IRISNet rebrand Horizontal-white.png',
                    pngTitle: 'png',
                    svgUrl: 'presskit/IRISNet rebrand Horizontal-white.svg',
                    svgTitle: 'svg'
                },
                {
                    id: 2,
                    imgUrl: 'presskit/irisnet_logo_black_pure.png',
                    pngUrl: 'presskit/IRISnet_rebrand_white.png',
                    pngTitle: 'png',
                    svgUrl: 'presskit/IRISnet_rebrand_white.svg',
                    svgTitle: 'svg'
                },
                {
                    id: 3,
                    imgUrl: 'presskit/irisnet_logo_white_pure.png',
                    pngUrl: 'presskit/IRISNet rebrand Horizontal Capital-white.png',
                    pngTitle: 'png',
                    svgUrl: 'presskit/IRISNet rebrand Horizontal Capital-white.svg',
                    svgTitle: 'svg'
                },
                {
                    id: 4,
                    imgUrl: 'presskit/irisnet_logo_column_black.png',
                    pngUrl: 'presskit/IRISnetlogo Vertical-black.png',
                    pngTitle: 'png',
                    svgUrl: 'presskit/IRISnetlogo Vertical-black.svg',
                    svgTitle: 'svg'
                },
                {
                    id: 5,
                    imgUrl: 'presskit/irisnet_logo_column_white.png',
                    pngUrl: 'presskit/IRISnetlogo Vertical-white.png',
                    pngTitle: 'png',
                    svgUrl: 'presskit/IRISnetlogo Vertical-white.svg',
                    svgTitle: 'svg'
                },
                {
                    id: 6,
                    imgUrl: 'presskit/iris_logo_black.png',
                    pngUrl: 'presskit/IRISnetRoundLogoWithoutText-black.png',
                    pngTitle: 'png',
                    svgUrl: 'presskit/IRISnetRoundLogoWithoutText-black.svg',
                    svgTitle: 'svg'
                },
                {
                    id: 7,
                    imgUrl: 'presskit/iris_logo_white.png',
                    pngUrl: 'presskit/IRISnetRoundLogoWithoutText-white.png',
                    pngTitle: 'png',
                    svgUrl: 'presskit/IRISnetRoundLogoWithoutText-white.svg',
                    svgTitle: 'svg'
                },
            ]
        },
        aboutIrisnet:{
            title: '关于IRISnet',
            content: [
                {
                    id: 0,
                    item:'IRISnet:可以自进化的BPoS跨链服务枢纽——下一代分布式商业应用的基础设施'
                },
                {
                    id: 1,
                    item:'就像在人间和天堂之间忠实传递信息的希腊彩虹女神Iris，IRISnet的目标是成为链接数字经济和实体经济的可信“桥梁”，为构建复杂的分布式商业应用提供新一代公链基础设施。边界智能和Tendermint团队合作开发的IRISnet将支持公链、联盟链以及传统商业系统之间的无缝集成，使得数据和复杂计算能够跨异构网络互联互通，实现服务的跨链调用。'
                },
                {
                    id: 2,
                    item:'IRISnet 是Cosmos 生态中除Cosmos Hub 外的另外一个Hub, 由边界智能（ Bianjie）和Tendermint团队合作开发，目标是成为链接数字经济和实体经济的可信“桥梁”，为构建复杂的分布式商业应用提供新一代面向服务的公链基础设施。IRISnet支持公链、联盟链以及传统商业系统之间的无缝集成，使得数据和复杂计算能够跨异构网络互联互通，实现服务的跨链调用。IRISnet 第一次实现了对BPoS 网络的自进化（通过在线治理实现网络升级）支持。'
                }
            ]
        },
        title: '社区',
        eventsTitle:'活动预告',
        events: {
            left: [
                {
                    img:'IRISnet_axonomy _defi.png',
                    href:'javascript:void(0);',
                    address:'北京',
                    timestamp:'2019年7月18日',
                    title:'AXONOMY DeFi 联盟战略发布会',
                    signUp:'加入活动',
                    signUpUrl:'http://www.huodongxing.com/event/3501047431800?layout=CN',
                    viewMore:'',
                    viewMoreUrl:'',
                },
                {
                    img:'IRISnet_events_buidl.jpg',
                    href:'https://www.buidl.asia/',
                    address:'韩国',
                    timestamp:'2019年7月22日-23日',
                    title:'Korea BUIDL 主题演讲:基于BPoS区块链的DeFi应用支持',
                    signUp:'加入活动',
                    signUpUrl:'https://www.buidl.asia/events/buidl-2019',
                    viewMore:'',
                    viewMoreUrl:'',
                }
            ],
         /*   right:[
                 {
                     img:'IRISnet_events_plat_on.jpg',
                     href:'javascript:void(0);',
                     address:'成都',
                     timestamp:'2019年7月19日',
                     title:'太古里的云图',
                     signUp:'',
                     signUpUrl:'',
                     viewMore:'',
                     viewMoreUrl:'',
                 },
            ]*/
        },
        faq:{
            faqTitle:'常见问题',
            faqImg:'/IRISnet_community_faq.png',
            faqList:{
                title: 'FAQ',
                list:[
                    {
                        item:'1. 什么是IRISnet？',
                    },
                    {
                        item:'2. IRIS的初始分配是怎样的？',
                    },
                    {
                        item:'3. IRISnet经济模型的架构是怎样的？',
                    },
                    {
                        item:'4. IRISnet和Cosmos是什么关系？',
                    },
                ],
                viewMore: '查看更多',
                viewMoreLink:'https://medium.com/irisnet-blog/irisnet-%E5%B8%B8%E8%A7%81%E9%97%AE%E7%AD%94-cc7a59293823'
            },
            ama:{
                title: '活动回顾',
                viewMore:'查看更多',
                viewMoreLink:'/events',
                leftList: [
	                {
		                img:'IRISnet_events_staking.jpg',
		                href:'javascript:void(0);',
		                title:'Staking Con',
		                content:'StakingCon Staking生态大会',
	                },
                    {
                        img:'IRISnet_ico.png',
                        href:'javascript:void(0)',
                        title:'ICO Pentera $ IRISnet',
                        content:'ICO Pentera $ IRISnet AMA',
                        img:'IRISnet_events_global.jpg',
                        href:'javascript:void(0)',
                        title:'GBAC',
                        content:'2019年第二届全球石墨烯区块链开发者大会',
                    },
                   
                ],
                rightList:[
	                {
		                img:'IRISnet_events_online.jpg',
		                href:'https://mp.weixin.qq.com/s/HYigu8lG-Z9gI-X7Nya81Q',
		                title:'区分FIND',
		                content:'了不起的中国公链',
	                },
                    {
                        img:'IRISnet_ama_zh_node.jpg',
                        href:'https://mp.weixin.qq.com/s/e62Q_P0-yGJmSA84_ClEhA',
                        title:'巴比特链节点',
                        content:'链节点线下活动 | 跨链技术与新机遇',
                    },
                    {
                        img:'IRISnet_events_staking.jpg',
                        href:'https://mp.weixin.qq.com/s/bMvji4cmX2oupowO2EN_9A',
                        title:'Staking Con',
                        content:'StakingCon Staking生态大会',
                    },
                   
                ],
                rightList:[
                  
                   /* {
                        img:'IRISnet_ama_jjs.jpg',
                        href:'',
                        title:'鲸交所',
                        content:'IRISnet的自进化：链上治理和不分叉的网络升级',
                    },
                    {
                        img:'IRISnet_events_global.jpg',
                        href:'https://mp.weixin.qq.com/s/c6IR5bRregeavgEKt9BnNA',
                        title:'GBAC',
                        content:'2019年第二届全球石墨烯区块链开发者大会',
                    },
                    {
                        img:'IRISnet_events_online.jpg',
                        href:'https://mp.weixin.qq.com/s/HYigu8lG-Z9gI-X7Nya81Q',
                        title:'区分FIND',
                        content:'了不起的中国公链',
                    },
                ],
            }
        },
        resources:{
            title:'资源',
            ResourceList:[
                {
                    img:'IRISnet_wallet.png',
                    name:'钱包',
                    href:'javascript:void(0);',
                    resourceList: [
                        {
                            itemName: 'Rainbow',
                            os:'(Android, iOS)',
                            href: 'https://www.rainbow.one/'
                        },
                        {
                            itemName: 'Math wallet',
                            os:'(Android, iOS)',
                            href: 'http://www.mathwallet.org/cn/'
                        },
                        {
                            itemName: 'Wetez',
                            os:'(Android, iOS)',
                            href: 'https://www.wetez.io/pc/homepage'
                        }
                    ],
                    content:'这些钱包支持IRIS及ATOM的转账和质押，请充分研究其安全性再使用。列示这些信息仅为方便下载，并不代表对钱包使用的安全性负责。',
                },
                {
                    img:'IRISnet_community_explorer.png',
                    name:'浏览器',
                    href:'javascript:void(0);',
                    resourceList: [
                        {
                            itemName: 'IRISplorer',
                            href: 'https://www.irisplorer.io/#/validators'
                        },
                        {
                            itemName: 'IRISnet-Overview',
                            href: 'https://irisnet-overview.genesislab.net/'
                        },
                        {
                            itemName: 'Big-Dipper',
                            href: 'https://iris.bigdipper.live/'
                        },
                        {
                            itemName: 'IRISnet-P2P',
                            href: 'https://irisnet.p2p.org'
                        },
                        {
                            itemName: 'Hubble',
                            href: 'https://hubble.figment.network/iris/chains/irishub'
                        }
                    ],
                    content:'您可通过以上区块链浏览器查询和分析 IRIS Hub 的区块、交易、验证人等信息。',
                },
                {
                    img:'IRISnet_press_kit.png',
                    name:'品牌资料',
                    content:'获取您可能需要的所有品牌资源和标志。',
                    href:'/community/press-kit',
                },
                {
                    img:'IRISnet_doc.png',
                    name:'文档',
                    content:'下一代分布式应用的跨链服务网络——自进化的BPoS区块链。',
                    href:'javascript:void(0);',
	                resourceList:[
		                {
			                itemName: '伏羲测试网',
			                href: 'https://www.irisnet.org/docs/zh/get-started/Join-the-Testnet.html'
		                },
		                {
			                itemName: '彩虹猫测试网',
			                href: 'https://github.com/irisnet/testnets/tree/master/nyancat'
		                },
		                {
			                itemName: '加入主网',
			                href: 'https://www.irisnet.org/docs/zh/get-started/Join-the-Mainnet.html'
		                },
		                {
			                itemName: '命令行',
			                href: 'https://www.irisnet.org/docs/zh/cli-client/'
		                },
		                {
			                itemName: '轻客户端',
			                href: 'https://www.irisnet.org/docs/zh/light-client/'
		                },
	                ]
                }
            ]
        },
        pastEvents:{
            title: '活动回顾',
            subheading:'以下是往期活动的回顾',
            currentDate:'近期活动回顾',
            imgList:[
                {
                    img:'IRISnet_events_staking.jpg',
                    href:'javascript:void(0);',
                    timestamp:'2019/07/10',
                    address:'北京',
                    title:'StakingCon Staking生态大会',
                },
                {
                    img: 'IRISnet_events_global.jpg',
                    href:'javascript:void(0)',
                    timestamp: '2019/07/06-07/07',
                    address:'上海',
                    title: '2019年第二届全球石墨烯区块链开发者大会'
                },
                {
                    img: 'IRISnet_events_online.jpg',
                    href:'https://mp.weixin.qq.com/s/HYigu8lG-Z9gI-X7Nya81Q',
                    timestamp: '2019/07/04',
                    address:'',
                    title: '了不起的中国公链'
                },
                {
                    img: 'IRISnet_ama_jjs.jpg',
                    href:'https://mp.weixin.qq.com/s/QYEGFaGNKDrwI7gUjsVeQA',
                    timestamp: '2019/07/02',
                    address:'',
                    title: '鲸交所视频直播：IRISnet的自进化：链上治理和不分叉的网络升级'
                },
                {
                    img: 'IRISnet_ama_zh_node.jpg',
                    href:'https://mp.weixin.qq.com/s/e62Q_P0-yGJmSA84_ClEhA',
                    timestamp: '2019/06/30',
                    address:'',
                    title: '链节点线下活动 | 跨链技术与新机遇'
                },
                {
                    img: 'IRISnet_ama_zh_node.jpg',
                    href:'https://mp.weixin.qq.com/s/CeUf2StlE6ux1xMBu-UFnQ',
                    timestamp: '2019/06/30',
                    address:'',
                    title: '圆桌论坛 | 跨链能否打开应用新赛道？项目方透露了这些新进展'
                },
                {
                    img: 'IRISnet_iservice.png',
                    href:'https://mp.weixin.qq.com/s/hVVp75iHxTbHKhImReuBQQ',
                    timestamp: '2019/06/30',
                    address:'',
                    title: 'IRISnet受邀深度剖析Cosmos跨链技术'
                },
                {
                    img: 'IRISnet_ama_qurea.png',
                    href:'https://mp.weixin.qq.com/s/gV8Zqqoz5-oRX9gZreBFNw',
                    timestamp: '2019/06/11',
                    address:'',
                    title: 'IRISnet：可以自进化的BPoS跨链服务枢纽'
                },
              /*  {
                    img: 'IRISnet_ama_hashbang.png',
                    href:'https://mp.weixin.qq.com/s/9tTIpT0oUdbY4bNPOmieIA',
                    timestamp: '2019/05/16',
                    address:'',
                    title: 'IRISnet BPoS：大道至简，共建跨链生态'
                },*/
               /* {
                    img: 'IRISnet_past_event_pannews.jpg',
                    href:'https://mp.weixin.qq.com/s/6BVMy233L6xVWtLATCTWCw',
                    timestamp: '2019/04/23',
                    address:'',
                    title: '第三代区块链技术落地 我们该期待些什么 | 跨链新时代'
                },*/
                // {
                //     img: 'IRISnet_ama_hashbang.png',
                //     href:'https://mp.weixin.qq.com/s/Ivw4pN_-l8G1yqfMCxTmPQ',
                //     timestamp: '2019/02/28',
                //     address:'',
                //     title: 'TokenGazer一问到底 | 第29期：研究员 vs IRISnet'
                // },
            ],
            pastListTitle:'2019',
            list:[
                {
                    href:'https://mp.weixin.qq.com/s/9tTIpT0oUdbY4bNPOmieIA',
                    timestamp:'2019/05/16',
                    title:'IRISnet BPoS：大道至简，共建跨链生态',
                    type:'线上活动',
                    address:''
                },
                {
                    href:'https://mp.weixin.qq.com/s/6BVMy233L6xVWtLATCTWCw',
                    timestamp:'2019/04/23',
                    title:'第三代区块链技术落地 我们该期待些什么 | 跨链新时代',
                    type:'线上活动',
                    address:''
                },
                {
                    href:'https://mp.weixin.qq.com/s/eTwV-zBccO4jKAQJZq0D8w',
                    timestamp:'2019/03/31',
                    title:'Cosmos & IRISnet 主网上线庆祝活动精彩回顾',
                    type:'线下活动',
                    address:'上海'
                },
                {
                    href:'https://mp.weixin.qq.com/s/Ivw4pN_-l8G1yqfMCxTmPQ',
                    timestamp:'2019/02/28',
                    title:'TokenGazer一问到底 | 第29期：研究员 vs IRISnet',
                    type:'线上活动',
                    address:''
                },
                {
                    href:'https://mp.weixin.qq.com/s/FXpfyshFD6A2ATGI_PZgiA',
                    timestamp:'2019/02/15',
                    title:'【算力智库专访】曹恒：代码开源是优秀区块链项目的基本条件',
                    type:'线上活动',
                    address:''
                },
                {
                    href:'https://mp.weixin.qq.com/s/laQM61DKvoYeR-Mvvlae1Q',
                    timestamp:'2019/01/14',
                    title:'巴比特报道 | 奚海峰：打造跨链服务网络，一位钻而不厌技术老兵的区块链进阶之旅',
                    type:'线上活动',
                    address:''
                },
               /* {
                    href:'',
                    timestamp:'',
                    title:'',
                    type:'',
                    address:''
                },
                {
                    href:'',
                    timestamp:'July 2th, 2017',
                    title:'WhaleEx live video',
                    type:'ONLINE',
                    address:'BEIJING'
                },
                {
                    href:'',
                    timestamp:'July 2th, 2017',
                    title:'WhaleEx live video',
                    type:'ONLINE',
                    address:'BEIJING'
                },
                {
                    href:'',
                    timestamp:'July 2th, 2017',
                    title:'WhaleEx live video',
                    type:'ONLINE',
                    address:'BEIJING'
                }*/
            ],
            pastListTwoTitle:'2018',
            pastListTwoList:[
                {
                    href:'https://mp.weixin.qq.com/s/m405arPrhZ6SoOwVRHMb_A',
                    timestamp:'2018/09/11',
                    title:'区块链3.0：共识算法、隐私保护丨IRISnet创始人奚海峰主持峰会讨论',
                    type:'线下活动',
                    address:'上海'
                },
                {
                    href:'https://mp.weixin.qq.com/s/eHUg6AaKadBt50v1H-GHXQ',
                    timestamp:'2018/9/11',
                    title:'【峰会演讲】COSMOS创始人 Jae Kwon：区块链生态新架构',
                    type:'线下活动',
                    address:'上海'
                },
                {
                    href:'https://mp.weixin.qq.com/s/Fxw3v8kr4CajKgr7WlMazw',
                    timestamp:'2018/08/30',
                    title:'跨链分享讨论——Cosmos中国&IRISnet研究员Suyu参与巴比特Chainge沙龙',
                    type:'线下活动',
                    address:'杭州'
                },
                {
                    href:'https://mp.weixin.qq.com/s/natjKrlGuJIvnVxnPe-s5A',
                    timestamp:'2018/07/22',
                    title:'与区块链行业先锋 Zaki Manian 的对话',
                    type:'线上活动',
                    address:''
                },
                {
                    href:'https://mp.weixin.qq.com/s/Xdf_fGIa_5v0b3NvIDz8-w',
                    timestamp:'2018/06/26',
                    title:'快速实现分布式商业应用？这个下一代公链提供了可能',
                    type:'线下活动',
                    address:'美国'
                },
                {
                    href:'https://mp.weixin.qq.com/s/gRG0PPR8r-6c717XDZasmw',
                    timestamp:'2018/05/23',
                    title:'Cosmos公开课：区块链互联网，internet of blockchain',
                    type:'线上活动',
                    address:''
                },
                {
                    href:'https://mp.weixin.qq.com/s/FrcOrKN1ZEzAO07aeFPnvA',
                    timestamp:'2018/05/10',
                    title:'Cosmos Reddit AMA回顾:Part 2',
                    type:'线上活动',
                    address:''
                },
                {
                    href:'https://mp.weixin.qq.com/s/Cs4jFFVI9ZNwaECReL5bCw',
                    timestamp:'2018/05/10',
                    title:'Cosmos Reddit AMA回顾:Part 1',
                    type:'线上活动',
                    address:''
                },
            ]
        }
    },
    cosmos:{
        cn:{
            header:{
                title:'Bianjie',
                commission:'佣金率',
                product:'由IRISnet核心开发团队维护的验证人节点',
                validatorAddress:'验证人地址',
                address:'cosmosvaloper1ssm0d433seakyak8kcf93yefhknjleeds4y3em',
                toastHint:'复制成功',
                bondedAtoms:'ATOM总数',
                votingPower:'权重',
                commissionRate:'佣金率',
                uptime:'活跃度',
                guide:'Cosmos Hub 钱包',
                guideHref:'https://hub.cosmos.network/#cosmos-hub-wallets'
            },
            about:{
                title:'关于IRISnet-Bianjie',
                secondTitle:'IRISnet的核心开发者，Cosmos的开源社区贡献者',
                irisnet:{
                    title:'IRISnet 核心开发者',
                    list:[
                        {
                            item:'在<a href="https://cosmos.network/about" target="_blank" style="color:rgba(77, 150, 223, 1)">Interchain Foundation (ICF)</a>的支持下构建IRISnet，这是一个用于构建分布式商业应用的Cosmos Hub'
                        },
                        {
                            item:'<a href="https://www.irisnet.org/" target="_blank" style="color:rgba(77, 150, 223, 1)">IRISnet</a> - 自进化的BPoS区块链'
                        },
                    ]
                },
                cosmos:{
                    title:'Cosmos的开源社区贡献者',
                    list:[
                        {
                            item:'2019年3月14日成为Cosmos Hub主网创世验证人'
                        },
                        {
                            item:'从Gaia-1000直至主网上线成功参与Cosmos全部测试网'
                        },
                        {
                            item:'自2017年8月起为Cosmos中国社区提供专业的技术支持'
                        }
                    ]
                }
                
            },
            bianjie:{
                title:'安全的边界，放心的委托',
                product:[
                    {
                        src:require('../../assets/cosmos/service_room.png'),
                        text:'安全可靠的企业级机房',
                    },
                    {
                        src:require('../../assets/cosmos/net.png'),
                        text:'高可用性网络',
                    },
                    {
                        src:require('../../assets/cosmos/node.png'),
                        text:'可扩展的哨兵节点',
                    },
                    {
                        src:require('../../assets/cosmos/lock.png'),
                        text:'硬件加密保证安全',
                    },
                    {
                        src:require('../../assets/cosmos/hour.png'),
                        text:'7*24小时专业监控',
                    },
                    {
                        src:require('../../assets/cosmos/shield.png'),
                        text:'商业DDos攻击防护',
                    }
                ]
            },
            cosmosExplorerTitle:'Cosmos Hub 浏览器',
            cosmosExplorer:[
                {
                    active:false,
                    whiteImg:require('../../assets/cosmos/big_dipper_white.png'),
                    blueImg:require('../../assets/cosmos/big-dipper_blue.png'),
                    title:'Big Dipper',
                    href:'https://cosmos.bigdipper.live/account/cosmos1ssm0d433seakyak8kcf93yefhknjleed4psy4g'
                },
                {
                    active:false,
                    whiteImg:require('../../assets/cosmos/cosmos_white.png'),
                    blueImg:require('../../assets/cosmos/cosmos_blue.png'),
                    title:'Cosmos Overview',
                    href:'https://cosmos-overview.genesislab.net/cosmosvaloper1ssm0d433seakyak8kcf93yefhknjleeds4y3em'
                },
                {
                    active:false,
                    whiteImg:require('../../assets/cosmos/hubble_white.png'),
                    blueImg:require('../../assets/cosmos/hubble_blue.png'),
                    title:'Hubble',
                    href:'https://hubble.figment.network/cosmos/chains/cosmoshub-2/validators/696ABC95186FD65A07050C28AB00C9358A315030'
                },
                {
                    active:false,
                    whiteImg:require('../../assets/cosmos/Mintscan_white.png'),
                    blueImg:require('../../assets/cosmos/Mintscan_blue.png'),
                    title:'Mintscan',
                    href:'https://www.mintscan.io/account/cosmos1ssm0d433seakyak8kcf93yefhknjleed4psy4g'
                },
                {
                    active:false,
                    whiteImg:require('../../assets/cosmos/Stargazer_white.png'),
                    blueImg:require('../../assets/cosmos/Stargazer_blue.png'),
                    title:'Stargazer',
                    href:'https://stargazer.certus.one/accounts/cosmos1ssm0d433seakyak8kcf93yefhknjleed4psy4g'
                },
            ]
        }
    },
    "white":'public/whiteDwCn.png',
    "whiteHref":"https://github.com/irisnet/irisnet/blob/master/白皮书.md",
    "next": 'what_next.png',
    "head": {
        'txt': [
            {
                'txt': "白皮书",
                "href": "#/0/1",
            },
            {
                'txt': "合作方",
                "href": "#/0/3",
            },
            {
                'txt': "联系方式",
                "href": "#/0/5",
            },
        ]
    },
    "contact": {
        "img": [
            {
                "src": "telegram-default.png",
                "src_selected": "telegram.png",
                "txt": "Telegram",
                "href": "https://t.me/irisnetworkcn"
            },
            {
                "src": "twitter-default.png",
                "src_selected": "newtwitter.png",
                "txt": "Twitter",
                "href": "https://twitter.com/irisnetwork"
            },

            {
                "src": "github-default.png",
                "src_selected": "newgithub.png",
                "txt": "Github",
                "href": "https://github.com/irisnet"
            },
            {
                "src": "email-default.png",
                "src_selected": "email.png",
                "txt": "Email",
                "href": "mailto:contact@irisnet.org"
            },
            {
                "src": "medium-default.png",
                "src_selected": "newmedium.png",
                "txt": "Medium",
                "href": "https://medium.com/irisnet-blog"
            },
            {
                "src": "riot-default.png",
                "src_selected": "newriot.png",
                "txt": "Riot",
                "href": "https://riot.im/app/#/room/!bmimZgJrUWSmxqQEmG:matrix.org"
            },
            {
                "src": "wechat-default.png",
                "src_selected": "newwechat.png",
                "txt": "Wechat"
            },
            {
                "src": "weibo-default.png",
                "src_selected": "newweibo.png",
                "txt": "Weibo",
                "href": "https://weibo.com/u/6455513027"
            },
        ],
        "title": "联系方式"
    },
    "collaboration": {
        "title": "合作方",
        "core":{
            "title":"核心开发团队",
            "list":[
                {
                    "img":"collaboration/bianjieai.png",
                    "pos":-56*0,
                    "title":"BIANJIE.AI",
                    "href":"https://www.bianjie.ai/"
                },
                {
                    "img":"collaboration/newtendermint.png",
                    "pos":-56*1,
                    "title":"Tendermint",
                    "href":"https://tendermint.com"
                },
            ]
        },

        "strategy":{
            "title":"战略合作伙伴",
            "img":"collaboration/strategy.png",
            "list":[
                {
                    "img":"collaboration/interchain.png",
                    "pos":-56*0,
                    "title":"Interchain Foundation",
                    "href":"https://cosmos.network/about"
                },

                {
                    "img":"collaboration/hashkeygroup.png",
                    "pos":-56*2,
                    "href":"https://www.hashkey.com/#/"
                },
            ]
        },
        "ecosystem":{
            "title":"生态合作伙伴",
            "img":"collaboration/hashgard.png",
            "list":[
                {
                    "img":"collaboration/Platonlogo.png",
                    "pos":-56*3,
                    "title":"Hashgard",
                    "href":" https://www.platon.network/#/index?lang=zh"
                },
                {
                    "img":"collaboration/hashquark.png",
                    "pos":-56*3,
                    "title":"Hashgard",
                    "href":"https://www.hashquark.io/#/"
                },
                {
                    "img":"collaboration/hashgard.png",
                    "pos":-56*3,
                    "title":"Hashgard",
                    "href":"https://www.hashgard.io/#/"
                }

            ]
        },
        "investment":{
            "title":"支持机构",
            "subtitle":"( 排名不分先后 )",
            "img":"collaboration/investment.png",
            "list":[
                {
                    "img":"collaboration/AminoCapital.png",
                    "pos":-56*0,
                    "title":"Amino Capital",
                    "href":"http://www.aminocapital.com"
                },
                {
                    "img":"collaboration/bibox.png",
                    "title":"Bibox",
                    "href":"https://www.bibox.com/"
                },
                {
                    "img":"collaboration/huobiCapital.png",
                    "title":"火币资本",
                    "href":"https://www.hbg.com/en-us/capital/"
                },
                {
                    "img":"collaboration/gbic.png",
                    "title":"GBIC",
                    "href":"https://gbic.io/"
                },
                {
                    "img":"collaboration/bawei.png",
                    "pos":-56*1,
                    "title":"8维资本",
                    "href":""
                },
                {
                    "img":"collaboration/bihu.png",
                    "pos":-56*2,
                    "title":"BIHU",
                    "href":"https://bihu.com/"
                },
                {
                    "img":"collaboration/newbtts.png",
                    "pos":-56*3,
                    "title":"BA Capital",
                    "href":""
                },
                {
                    "img":"collaboration/newBKfund.png",
                    "pos":-56*4,
                    "title":"BKFund",
                    "href":""
                },
                {
                    "img":"collaboration/bzt.png",
                    "pos":-56*5,
                    "title":"Byzantium",
                    "href":""
                },
                {
                    "img":"collaboration/chainPEter.png",
                    "pos":-56*6,
                    "title":"Chain PE",
                    "href":"http://www.chainpe.com"
                },
                {
                    "img":"collaboration/cp.png",
                    "pos":-56*7,
                    "title":"Chain Pool",
                    "href":"https://chainpool.io"
                },
                {
                    "img":"collaboration/coefficient.png",
                    "pos":-56*8,
                    "title":"Coefficient",
                    "href":"http://coefficient.network"
                },
                {
                    "img":"collaboration/gszb.png",
                    "pos":-56*9,
                    "title":"共识资本",
                    "href":"http://consensuscapital.ca"
                },
                {
                    "img":"collaboration/dsjj.png",
                    "pos":-56*10,
                    "title":"读数资本",
                    "href":""
                },
                {
                    "img":"collaboration/genblock.png",
                    "pos":-56*11,
                    "title":"Genblock",
                    "href":"https://genblock.capital"
                },
                {
                    "img":"collaboration/hayek.png",
                    "pos":-56*12,
                    "title":"Hayak",
                    "href":""
                },
                {
                    "img":"collaboration/ink.png",
                    "pos":-56*13,
                    "title":"Ink Labs",
                    "href":"http://ink.one"
                },
                {
                    "img":"collaboration/linkvc.png",
                    "pos":-56*14,
                    "title":"LinkVC",
                    "href":"http://www.linkvc.com"
                },
                {
                    "img":"collaboration/newmedishares.png",
                    "pos":-56*15,
                    "title":"Medi Shares",
                    "href":"http://medishares.org/"
                },
                {
                    "img":"collaboration/js.png",
                    "pos":-56*16,
                    "title":"MILESTONE",
                    "href":"http://www.milestonevc.com/index.html"
                },
                {
                    "img":"collaboration/nirvanacapital.png",
                    "pos":-56*16,
                    "title":"Nirvana Capital",
                    "href":"http://nirvana.capital/"
                },
                {
                    "img":"collaboration/ngc.png",
                    "pos":-56*17,
                    "title":"NEO GLOBAL",
                    "href":"http://ngc.fund"
                },
                {
                    "img":"collaboration/y.png",
                    "pos":-56*18,
                    "title":"Origin Capital",
                    "href":"http://www.theorigincapital.com"
                },
                {
                    "img":"collaboration/satoshifund.png",
                    "pos":-56*19,
                    "title":"Satoshi Fund",
                    "href":"https://satoshi.fund"
                },
                {
                    "img":"collaboration/ggtm.png",
                    "pos":-56*20,
                    "title":"SV Insight",
                    "href":"http://www.svinsight.com"
                },
                {
                    "img":"collaboration/sczb.png",
                    "pos":-56*21,
                    "title":"时戳资本",
                    "href":""
                },
                {
                    "img":"collaboration/hxjj.png",
                    "pos":-56*22,
                    "title":"Transference Fund",
                    "href":""
                },
                {
                    "img":"collaboration/unetwork.png",
                    "pos":-56*23,
                    "title":"U Network",
                    "href":"https://u.network"
                },
                {
                    "img":"collaboration/jhct.png",
                    "pos":-56*24,
                    "title":"WATERDRIP CAPITAL",
                    "href":"http://www.unityvc.com"                },
                {
                    "img":"collaboration/ua.png",
                    "pos":-56*25,
                    "title":"",
                    "href":""
                },
                {
                    "img":"collaboration/sdzb.png",
                    "pos":-56*25,
                    "title":"WATERDRIP CAPITAL",
                    "href":"http://waterdrip.io"
                },
                {
                    "img":"collaboration/ydzb.png",
                    "pos":-56*25,
                    "title":"WATERDRIP CAPITAL",
                    "href":""
                }
            ]
        },

        "counsel":{
            "title":"Counsel",
            "img":"collaboration/counsel.png",

            "list":[
                {
                    "img":"collaboration/ey.png",
                    "pos":-56*0,
                    "title":"E&Y",
                    "href":"http://www.ey.com"
                },
                {
                    "img":"collaboration/king.png",
                    "pos":-56*1,
                    "title":"KWM",
                    "href":"http://www.kwm.com/"
                }
            ]
        },


        "txt": [
            '核心技术团队',
            '战略合作伙伴'
        ],

        "list": [
            {
                "img": "collaboration/bianjie.png",
                "title": "边界智能",
                "text": "bianjie.ai",
                "href": "https://bianjie.ai"
            },
            {
                "img": "collaboration/cosmos.png",
                "title": "COSMOS",
                "text": "cosmos.network",
                "href": "https://cosmos.network"
            },
            {
                "img": "collaboration/tendermint.png",
                "title": "Tendermint",
                "text": "tendermint.com",
                "href": "https://tendermint.com"
            },
            {
                "img": "collaboration/hashkeygroup.png",
                "href": "https://www.hashkey.com/#/"
            },
            {
                "img": "collaboration/base.png",
                "title": "万向新链加速器",
                "text": "newchainbase.com",
                "href": "http://www.newchainbase.com"
            },
            {
                "img": "collaboration/waterdrip.png",
                "title": "水滴资本",
                "text": "waterdrip.io",
                "href": "http://waterdrip.io/"
            },
            {
                "img": "collaboration/medishares.png",
                "title": "Medishares",
                "text": "medishares.org",
                "href": "https://medishares.org"
            },
            {
                "img": "collaboration/transference.png",
                "title": "Transference",
                "text": "",
                "href": ""
            },
            {
                "img": "collaboration/bkfund.png",
                "title": "BKFund",
                "text": "",
                "href": ""
            },
            {
                "img": "collaboration/timestamp.png",
                "title": "时戳资本",
                "text": "",
                "href": ""
            },
        ],
        "btnTxt":"合作方"
    },
    "about": {

        "title": '核心创新',
        "imgtxt": " 助力打造分布式商业应用",
        "txt": [
            '将面向服务的基础设施融入到Cosmos网络中',
            '整合由异构系统提供的商业服务，包括公共链、联盟链以及现有系统',
            '通过区块链互联网实现服务的互联互通'
        ],
        "btnTxt":"白皮书",
        "checkTxt":"网络设计"
    },
    "network": {
        "title": '网络设计',
        "txt": [
            '通过标准的ABCI交易实现IRIS服务（也称为iServices）的' +
            '注册，绑定，调用，查询，分析和管理',
            'iService提供商充当公共链、联盟区块链以及现有企业系统中业务逻辑的适配器',
            '可以通过扩展的IBC协议在区块链互联网中调用iServices'
        ],
        "src": 'white.png'
    },
    "privacy": {
        "title": "IRIS Foundation Limited",
        "title1": "Privacy policy",
        "list": [
            {
                'title': "Introduction",
                "txtList": [
                    'We are IRIS Foundation Limited, a company limited by guarantee and incorporated in Hong Kong (“the Foundation”, ' +
                    '“we” or “us”). ',
                    'Your privacy is important to us.  We are committed to protecting the privacy, confidentiality and security of the personal data we hold by ' +
                    'complying with the requirements under applicable laws and regulations.  We are equally committed to ensuring that all our employees, service ' +
                    'providers and agents uphold these obligations.',
                    'This policy explains how we manage personal data within our organization.'
                ]
            },
            {
                'title': "How we collect personal data",
                "txtList": [
                    'We collect personal data about you in the following ways: ',
                    '<ul>' +
                    '<li>where you register for an account or to receive emails from us</li>' +
                    '<li>when you order products or services from us</li>' +
                    '<li>when you submit a query or request to us</li>' +
                    '<li>when you respond to a survey that we run or fill in forms on one of our websites</li>' +
                    '<li>by tracking your use of our websites and mobile applications</li>' +
                    '<li>from public sources</li>' +
                    '<li>from examination of public and private blockchains</li>' +
                    '<li>from third parties who are entitled to disclose that information to us</li>' +
                    '<li>when you apply for a job with us</li>' +
                    '</ul> ',
                    'In some cases we may be required by law to collect certain types of personal data about you.',
                    'Where we collect personal data from you, we will generally do so ourselves.  However, in some cases ' +
                    'we may collect personal data from a third party, such as through your representatives, contractors who ' +
                    'provide services to us, or third parties who refer you to us because they think you may be interested in our ' +
                    'products or services.'
                ]
            },
            {
                'title': "Kinds of personal data we collect",
                "txtList": [
                    'The kinds of personal data that we collect and hold about you may include: ',
                    '<ul>' +
                    '<li>identifying information, such as your real name, nationality, ID type, ID number and other information required by the laws and regulations</li>' +
                    '<li>contact information, such as your postal address, email address and telephone number personal information</li>' +
                    '<li>social media handles and other social media profile information that you make available to us or to the public</li>' +
                    '<li>financial information, such as credit card, bank account or other payment details</li>' +
                    '<li>blockchain identifiers, such as blockchain addresses and public keys</li>' +
                    '<li>usernames and passwords that you create when registering for an account with us</li>' +
                    '<li>details of any products or services that we provide to you</li>' +
                    '<li>information about how you use the products and services we provide</li>' +
                    '<li>records of our communications with you, including any messages you send us</li>' +
                    '</ul> ',
                    'Without this information, we may not be able to provide you with our products or services (or with all of the features and functionality offered by our products or services) or to respond to queries or requests that you submit to us.'
                ]
            },
            {
                'title': "Purposes for which we use personal data",
                "txtList": [
                    'We use personal data that we collect about you for the following purposes: ',
                    '<ul>' +
                    '<li>to verify your identity when you are dealing with us</li>' +
                    '<li>to determine your eligibility for any of our products or services</li>' +
                    '<li>to determine your compliance with the terms and conditions that apply to any of our products or services and applicable law</li>' +
                    '<li>to enable us to provide our products and services</li>' +
                    '<li>to improve our website based on your information and feedback</li>' +
                    '<li>to answer your queries and requests</li>' +
                    '<li>to comply with our legal and regulatory obligations</li>' +
                    '<li>to carry out market analysis and research</li>' +
                    '<li>to monitor use of our products and services</li>' +
                    '<li>to assess, maintain, upgrade and improve our products and services</li>' +
                    '<li>to carry out education and training programs for our staff</li>' +
                    '<li>to manage and resolve any legal or commercial complaints or issues</li>' +
                    '<li>to carry out planning and forecasting activities and other internal business processes</li>' +
                    '<li>to keep you informed about our activities, including by sending out newsletters</li>' +
                    '<li>to connect you with our users of our products and services</li>' +
                    '</ul> '
                ]
            },
            {
                'title': "Direct marketing",
                "txtList": [
                    'We may from time to time use your personal data in order to send you marketing materials about products ' +
                    'or services that we think you may be interested in (including in some cases products and services that ' +
                    'are provided by a third party).  We may not use your personal data unless we have received your consent.  ' +
                    'You can opt-out of receiving marketing communications from us by contacting us at ' +
                    '<a href="mailto:contact@irisnet.org" >contact@irisnet.org </a>. ',
                    'We may use your following personal data for the purpose of direct marketing:  ',
                    '<ul>' +
                    '<li>identifying information, such as your name and date of birth</li>' +
                    '<li>contact information, such as your postal address, email address and telephone number</li>' +
                    '<li>products and services portfolio information and demographic data held by us from time to time</li>' +
                    '</ul> ',
                    'We may use your personal data to market the following products and/or services to you:',
                    '<ul>' +
                    '<li>purchasing and/or trading digital assets</li>' +
                    '<li>providing, managing or accessing mobile wallets for holding digital assets; and</li>' +
                    '<li>other products or services related to digital assets</li>' +
                    '</ul> ',
                    'If we use your personal data in any direct marketing communications, you have the right to request that we provide ' +
                    'you with the source of that personal data.  There is no fee for requesting this information.  We will provide you ' +
                    'with the source of the personal data, unless it is impracticable or unreasonable to do so. ',
                    'Please indicate your consent to receiving information relating to the above by contacting us at ' +
                    '<a href="mailto:contact@irisnet.org" >contact@irisnet.org </a> . ',
                    'We may also use and disclose your information for other purposes in accordance with your requests or instructions.'
                ]
            },
            {
                'title': "People to whom we may disclose personal data",
                "txtList": [
                    'We may share personal data about you with: ',
                    '<ul>' +
                    '<li>your representatives, advisers and others you have authorised to interact with us on your behalf</li>' +
                    '<li>our staff who need the information to discharge their duties</li>' +
                    '<li>related entities within our corporate group</li>' +
                    '<li>our business partners, agents and service providersp</li>' +
                    '<li>payment system operators and financial institutions</li>' +
                    '<li>prospective purchasers of all or part of our business or a related entity</li>' +
                    '<li>professional advisers who we engage to provide advice on our business</li>' +
                    '<li>government authorities who ask us to disclose that information, or to other people as required by law</li>' +
                    '</ul> ',
                    'In some cases the people to whom we disclose your personal information may be located overseas.  Further, we may have servers ' +
                    'located overseas.  The jurisdictions in which these people and/or servers are likely to be located include  the United States, Japan, ' +
                    'and Singapore.  There may not be in place data protection laws which are substantially similar to, or serve the same purposes as the ' +
                    'applicable data privacy laws in Hong Kong.  This means your personal information may not be protected to the same or similar level in Hong Kong. ',
                    '[<span>We will never sell your personal data to any third party.</span>] [<span><b>optional clause</b></span>]'
                ]
            },
            {
                'title': "Cookies <div class='div1'>[optional clause, to be used if cookies are relevant to your business]</div> ",
                "txtList": [
                    '<span>[We use cookies to monitor and observe your use of our websites, compile aggregate data about that use, ' +
                    'and provide you with a more effective service (which may include customising parts of our websites based on ' +
                    'your preferences and past activities on those websites).  <b>"Cookies"</b> are small text files created and stored on ' +
                    'your hard drive by your internet browser software, in order to hold relevant information about the web page you are ' +
                    'currently viewing.  Most internet browsers have a facility that will allow you to disable cookies altogether – ' +
                    'please refer to your browser’s help menu to find out how to do this.  While you will still be able to browse our websites ' +
                    'with cookies disabled on your internet browser, some website functionality may not be available or may not function correctly.]</span> ',
                ]
            },
            {
                'title': "Storage and security of personal data ",
                "txtList": [
                    'We generally store the personal data that we collect in electronic databases, some of which may be held on our behalf by third party data storage ' +
                    'providers.  Sometimes we also keep hard copy records of this personal data in physical storage facilities.  We use a range of physical and technical ' +
                    'security processes and procedures to protect the confidentiality and security of the information that we hold, and we update these from time to time ' +
                    'to address new and emerging security threats that you become aware of.',
                    '[We also take steps to monitor access to and modification of your information by our staff, and ensure that our staff are aware of and properly trained ' +
                    'in their obligations for managing your privacy.] [<b>optional clause</b>]'
                ]
            },
            {
                'title': "Google Analytics <div class='div1'>[optional clause, to be used if Google Analytics are used]</div>",
                "txtList": [
                    '<span>[Our website uses Google Analytics, a web analytics service provided by Google, Inc. (“<b>Google</b>”). ' +
                    '<span> Google Analytics uses cookies to help the website analyse how users use our website.</span>',
                    '<span>The information generated by the cookie about your use of our website (including your IP address) will be transmitted to and stored ' +
                    'by Google on servers in the United States.  Google will use this information for the purpose of evaluating your use of the website, compiling ' +
                    'reports on website activity for website operators and providing other services relating to website activity and internet usage.  Google may also ' +
                    'transfer this information to third parties where required to do so by law, or where such third parties process the information on Google’s behalf.  ' +
                    'Google will not associate your IP address with any other data held by Google.</span> ',
                    '<span>You may refuse the use of cookies by selecting the appropriate settings on your browser, however please note that if you do this you may not be able to use ' +
                    'the full functionality of our website.  By using our website, you consent to the processing of data about you by Google in the manner and for the purposes ' +
                    'set out above.]</span>'
                ]
            },
            {
                'title': "Retention of personal data",
                "txtList": [
                    'Your personal data will only be kept as long as required.',
                    'We may retain your personal data for a period of at least 12 months.  At our discretion, we may retain personal data for longer than the ' +
                    'said period if we consider it necessary or desirable to do so to meet our legal or regulatory obligations.  '
                ]
            },
            {
                'title': "Access and correction ",
                "txtList": [
                    'If you want to access any of the personal data that we hold about you or to correct some aspect of it (for example, because you think it is ' +
                    'incomplete or incorrect), please contact our privacy compliance team using the contact details set out below.  To protect the integrity and ' +
                    'security of the information we hold, we may ask that you follow a defined access procedure, which may include steps to verify your identity.  ' +
                    'In certain cases we may charge you an administration fee for providing you with access to the information you have asked for, but we will inform ' +
                    'you of this before proceeding.  There may be cases where we are unable to provide the information you request, such as where it would interfere ' +
                    'with the privacy of others or result in a breach of confidentiality.  In these cases we will let you know why we cannot comply with your request. ',
                    'Even if you do not request access to and/or correct your personal data held  by us, if we are satisfied that, having regard to the reasons for which we ' +
                    'hold your personal data, that personal data is inaccurate, incomplete, out-of-date, irrelevant or misleading, we may take reasonable steps to correct that ' +
                    'information. '
                ]
            },
            {
                'title': "Your consent",
                "txtList": [
                    'By using our website, providing personal data and/or using any of our products or services, you agree that:',
                    '<ul>' +
                    '<li>you consent to this privacy policy, as updated from time to time; and</li>' +
                    '<li>if you have provided personal data to us relating to any other person, you:' +
                    '<ul>' +
                    '<li>have a right to provide that information;</li>' +
                    '<li>have provided a copy of this privacy policy, as updated from time to time, to that person; and</li>' +
                    '<li>each such person has agreed to those terms.</li>' +
                    '</ul>' +
                    '</li>' +
                    '</ul>',
                ]
            },
            {
                'title': "Complaints",
                "txtList": [
                    'We try to meet the highest standards in order to protect your privacy.  However, if you are concerned about the way in which we are ' +
                    'managing your personal data and think we may have breached any applicable privacy laws, or any other relevant obligation, please contact ' +
                    'our privacy compliance team using the contact details set out below.  We will make a record of your complaint and refer it to our internal ' +
                    'complaint resolution department for further investigation.  We will deal with the matter as soon as we can, and keep you informed of the progress ' +
                    'of our investigation..',
                ]
            },
            {
                'title': "Changes to this policy",
                "txtList": [
                    'We may make changes to this policy from time to time, to take into account changes to our standard practices and procedures or where necessary to ' +
                    'comply with new laws and regulations.  The latest version of this policy will always be available on our website.'
                ]
            },
            {
                'title': "Contact details",
                "txtList": [
                    'If you want any further information from us on privacy matters, please contact our privacy compliance team at ' +
                    '<a href="mailto:contact@irisnet.org" >contact@irisnet.org </a>  .'
                ]
            },
        ]
    },
    "terms": {
        "title": "IRIS Foundation Limited",
        "title1": "Website terms of use",
        "list": [
            {
                'title': "Introduction",
                "txtList": [
                    'This website (“our website”) is owned and operated by IRIS Foundation Limited, a company limited by ' +
                    'guarantee and incorporated in Hong Kong (“the Foundation”, “we” or “us”).  Each reference in these terms ' +
                    'of use to “our website” includes all materials that we make available to you on our website.',
                    'By using our website, you agree to comply with these terms of use.  Please check this page each time you use our website, ' +
                    'as we may update these terms from time to time.',
                    'If you carry out any transaction through our website, that transaction may be subject to additional terms and conditions ' +
                    'which you will be asked to read and accept at the relevant time.  To the extent of any inconsistency with these terms, the terms ' +
                    'of the transaction apply to that transaction and any matters connected with it.',
                ]
            },
            {
                'title': "Your obligations",
                "txtList": [
                    'You must comply with any instructions we give you about how to use our website and must not do anything that interferes with or ' +
                    'adversely affects the normal operation of the website (including the ability of other users to access or use the website).',
                    'You are responsible for ensuring the security of the systems and devices that you use to access our website, including through ' +
                    'use of appropriate virus-checking and other security software.'
                ]
            },
            {
                'title': "Registration",
                "txtList": [
                    'You may need to register with us in order to access certain parts of our website.  Further details about registrations are ' +
                    'available here.  In this case, we may issue you with a user name and password, or other appropriate log-in details for your account.  ' +
                    'You are responsible for keeping your log-in details confidential so that they cannot be used without your permission.  You will be ' +
                    'responsible for any use of our website by anyone using your log-in details.'
                ]
            },
            {
                'title': "Rights to suspend or terminate access",
                "txtList": [
                    'We may suspend, terminate or block your access to all or any part of our website at any time and without prior notice to you.'
                ]
            },
            {
                'title': "Intellectual property",
                "txtList": [
                    'All of the intellectual property rights in and to our website belong to us and our licensors.  We may update and change the materials available on our ' +
                    'website, including by removing materials, at any time in our discretion without notice to you.',
                    'You may download or print sections of our website if needed for your own personal use, but otherwise you may not reproduce any part of our website without ' +
                    'our express prior consent.  To the extent that our website contains functionality that allows you to access or download specific materials through our website, ' +
                    'your use of that functionality and the downloaded materials may be subject to separate terms and conditions which you will be asked to read and accept at the ' +
                    'relevant time.'
                ]
            },
            {
                'title': "Website links",
                "txtList": [
                    'Our website may contain or link to information that has not been devised, verified or tested by us or any of our officers, employees or agents.  These are provided ' +
                    'for your information only.  We do not take any responsibility for that information, nor endorse its accuracy or completeness.  ',
                    'We do not guarantee that the information, or the provision of the hyperlinks to you, does not infringe third party rights.  If our website contains a link to ' +
                    'an external website, we do not endorse, recommend, approve, guarantee or introduce any third parties or the services and/or products that those third parties ' +
                    'may offer.  We accept no responsibility for them or any of the content available, or for any loss or damage that may arise from your use of them.',
                    'You may provide a link to the home page of our website at, on any website you operate, as long as you do not suggest any form of association, approval or ' +
                    'endorsement on our part without our express prior permission and you promptly delete the link at our request.',
                    'Except as set out in this clause, you may not link to our website.'
                ]
            },
            {
                'title': "No financial services activities or advice ",
                "txtList": [
                    'The information and any materials contained in this website should not be considered as an offer or solicitation to buy or sell financial instruments, provide ' +
                    'financial advice, create a trading platform, facilitate or take deposits or provide any other financial services of any kind in any jurisdiction.',
                    'The information contained on this website is not intended to provide and should not be construed as advice of any kind.  You should obtain appropriate ' +
                    'professional advice when necessary. It does not take into account your objectives, financial situation or needs. '
                ]
            },
            {
                'title': "Liability",
                "txtList": [
                    'While we will use reasonable care and skill in operating our website, we cannot promise that our website will always be available, ' +
                    'meet your requirements or completely free of faults, errors or compromise from cybersecurity events. ',
                    'To the maximum extent permitted by law, except as expressly set out in these terms of use, we exclude:',
                    '<ul>' +
                    '<li>all conditions, representations, warranties and statutory guarantees, whether express or implied, in relation to our website; and</li>' +
                    '<li>any liability, whether in contract, tort (including negligence), or otherwise, for any indirect or consequential loss, ' +
                    'damage or expense incurred by you or any other user in connection with our website.</li>' +
                    '</ul>',
                    'To the extent we are unable by law to exclude any implied condition, representation, warranty or statutory guarantee in relation to the provision of ' +
                    'goods or services through our website, we limit our liability for a breach to the re-supply of those goods or services, or payment for such re-supply.  ' +
                    'This is without limitation to any other exclusions or restrictions of our or others’ liability in connection with this website.'
                ]
            },
            {
                'title': "Privacy",
                "txtList": [
                    'We will manage any personal information that we collect through our website in accordance with our <a class="privacy"> Privacy Policy</a>, which you can access here. '
                ]
            },
            {
                'title': "Governing law",
                "txtList": [
                    'These terms of use are governed by the laws in force in Hong Kong and are subject to the exclusive jurisdiction of the courts in that place.'
                ]
            },
            {
                'title': "Questions?",
                "txtList": [
                    'Please contact us <a href="mailto:contact@irisnet.org" >contact@irisnet.org </a> if you have any questions about our website.'
                ]
            },
        ]
    },
    "qr":{
        "title":" 请扫描二维码",
        "txt":" 关注公众号"
    },
    // "community":{
    //     "title":"社区",
    //     "coming":"敬请期待"
    //
    // },
    "contactList":[
        {"infotitle":"IRISnet以希腊彩虹女神Iris命名，"},
        {"infotitle":"她是在人间和天堂之间传递信息的"},
        {"infotitle":"忠诚使者"}
    ],
    "appcontact": {
        "appimg": [
            {
                "src": "telegran.png",
                "src_selected": "telegran_selected.png",
                "txt": "Telegram",
                "href": "https://t.me/irisnetworkcn"
            },
            {
                "src": "twitter.png",
                "src_selected": "twitter_selected.png",
                "txt": "Twitter",
                "href": "https://twitter.com/irisnetwork"
            },

            {
                "src": "github.png",
                "src_selected": "github_selected.png",
                "txt": "Github",
                "href": "https://github.com/irisnet"
            },
            {
                "src": "mail.png",
                "src_selected": "mail_selected.png",
                "txt": "Email",
                "href": "mailto:contact@irisnet.org"
            }],
        "appimg1":[{
                "src": "bluemedium.png",
                "src_selected": "redmedium-selected.png",
                "txt": "Medium",
                "href": "https://medium.com/irisnet-blog"
            },
            {
                "src": "riot.png",
                "src_selected": "riot_selected.png",
                "txt": "Riot",
                "href": "https://riot.im/app/#/room/#iris:matrix.org"
            },
            {
                "src": "wechat.png",
                "src_selected": "wechat_selected.png",
                "txt": "Wechat"
            },
            {
                "src": "weibo.png",
                "src_selected": "weibo_selected.png",
                "txt": "Weibo",
                "href": "https://weibo.com/u/6455513027"
            }],
    },
    "submit":{
        'Subscribe':'提交',
        "success": "订阅成功"
    },
    "errEmail":{
        "err":"请输入一个有效的邮箱地址"
    },
    "placehooder":{
        "placehooder": "请输入你的邮箱地址"
    },
    "mobileLogo": [
        {
            "src": '../../../public/mobile_main_zh.png',
            "active": true
        },
        {
            "src": '../../../public/mobile_bug_bounty_zh.gif',
            "active": false
        },
        {
            "src": '../../../public/mobile_irisnet_zh.gif',
            "active": false
        }
    ],
        // "announcements":[
        // {
        //     src:'../../public/announcements_betanet.png',
        //     timestamp:"2019年2月1日",
        //     imgtext:'Betanet上线工作计划',
        //     href:'https://github.com/irisnet/iris-foundation/blob/master/betanet_work_plan.md'
        // },
        // {
        //     src:'../../public/announcements_mainnet.png',
        //     timestamp:"2019年1月16日",
        //     imgtext:'IRIS基金会宣布Betanet启动计划 - IRIS主网启动的第一步',
        //     href:'https://github.com/irisnet/iris-foundation/blob/master/iris-betanet-plan_cn.md'
        // },
        // {
        //     src:'../../public/announcements_irisnet.png',
        //     timestamp:"2019年1月16日",
        //     imgtext:'对IRIS Betanet的期望',
        //     href:'https://github.com/irisnet/iris-foundation/blob/master/iris-betanet-expectations_cn.md'
        // },


    // ]
};
