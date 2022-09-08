import Vue from 'vue'
import Router from 'vue-router'
import treehole from "../views/home/treehole";
import homepage from "../views/home/homepage";
import quiz from "../views/home/quiz";
import quizshow from "../views/quizshow/show"
import community from "../views/home/community";
import writeblog from "../views/home/writeblog";
import othersSpace from "../views/home/otherSspace";
import myspace from "../views/home/myspace";
import notices from "../views/home/notices";
import aComment from "../views/notices/aComment";
import activeMessage from "../views/notices/activeMessage";
import articleComment from "../views/notices/articeComment";
import articlePush from "../views/notices/articePush";
import auditInformation from "../views/notices/auditInformation";
import friendsMessage from "../views/notices/friendsMessage";
import friendVerification from "../views/notices/friendVerification";
import replyMessage from "../views/notices/replyMessage";
import thumbArticles from "../views/notices/thumbArtices";
import thumbNews from "../views/notices/thumbNews";
import noticesettings from "../views/notices/noticesettings";
import infoeditor from "../views/myspace/infoeditor"
import countcontrol from "../views/myspace/countcontrol";
import privateAarticle from "../views/myspace/article/privateAarticle";
import publicArticle from "../views/myspace/article/publicArticle";
import allArticle from "../views/myspace/article/allArticle";
import columnArticle from "../views/myspace/article/columnArticle";
import statusArticle from "../views/myspace/article/statusArticle";
import imageUp from "../views/myspace/imageUp";
import mycolums from "../views/myspace/column/mycolums";
import myjoincolums from "../views/myspace/column/myjoincolums";
import collectionAns from "../views/myspace/collection/collectionAns";
import collectionArticle from "../views/myspace/collection/collectionArticle";
import collectionColums from "../views/myspace/collection/collectionColums";
import showinfo from "../views/myspace/showinfo";
import hotAns from "../views/homepage/hotAns";
import hotArticle from "../views/homepage/hotArticle";
import lastAns from "../views/homepage/lastAns";
import lastArticle from "../views/homepage/lastArticle";
import ansStatus from "../views/myspace/answear/ansStatus";
import myAns from "../views/myspace/answear/myAns";
import myQue from "../views/myspace/answear/myQue";
import quizFriend from "../views/quiz/quizFriend";
import quizHot from "../views/quiz/quizHot";
import quizLast from "../views/quiz/quizLast";
import quizTui from "../views/quiz/quizTui";
import communitys from "../views/community/communitys";
import haoYou from "../views/treehole/haoYou";
import piaoLiu from "../views/treehole/piaoLiu";
import riZhi from "../views/treehole/riZhi";
import baiDongZhi from "../views/treehole/baiDongZhi";
import haoYouChat from "../views/treehole/haoYou/haoYouChat";
Vue.use(Router)

export default new Router({
  mode: "history",
  //首页的都是大模块所以必须保持独立
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage,
      children:[
        {
          path: "",
          name: "hotArticle",
          component: hotArticle,
        },
        {
          path: "hotAns",
          name: "hotAns",
          component: hotAns
        },

        {
          path: "lastAns",
          name: "lastAns",
          component: lastAns
        },
        {
          path: "lastArticle",
          name: "lastArticle",
          component: lastArticle
        }
      ]
    },
    {
      path: '/treehole',
      name: 'treehole',
      component: treehole,
      children:[
        {
          path: "",
          name: "riZhi",
          component: riZhi
        },
        {
          path: "haoYou",
          name: "haoYou",
          component: haoYou,
          children:[
            {
              path: "haoYouChat",
              name: "haoYouChat",
              component: haoYouChat
            }
          ]
        },
        {
          path: "piaoLiu",
          name: "piaoLiu",
          component: piaoLiu
        },
        {
          path: "baiDongZhi",
          name: "baiDongZhi",
          component: baiDongZhi
        }
      ]

    },
    {
      path: '/quiz',
      name: 'quiz',
      component: quiz,
      children:[
        {
          path: "",
          name: "quizHot",
          component: quizHot
        },
        {
          path: "quizTui",
          name: "quizTui",
          component: quizTui
        },
        {
          path: "quizFriend",
          name: "quizFriend",
          component: quizFriend
        },
        {
          path: "quizLast",
          name: "quizLast",
          component: quizLast
        },
        {
          path: "quizshow",
          name: "quizshow",
          component: quizshow

        }
      ]
    },

    {
      path: '/community',
      name: 'community',
      component: community,
      children:[
        {
          path: "",
          name: "communitys",
          component: communitys
        }
      ]
    },

    {
      path: '/writeblog',
      name: 'writeblog',
      component: writeblog
    },

    {
      path: '/othersSpace',
      name: 'othersSpace',
      component: othersSpace
    },

    {
      path: '/myspace',
      name: 'myspace',
      component: myspace,
      children:[
        {
          path: 'showinfo',
          name: 'showinfo',
          component: showinfo
        },
        {
          path: 'infoeditor',
          name: 'infoeditor',
          component: infoeditor,
        },
        {
          path: 'countcontrol',
          name: 'countcontrol',
          component: countcontrol,
        },
        {
          path: 'imageUp',
          name: 'imageUp',
          component: imageUp
        },
        {
          path: 'privateAarticle',
          name: 'privateAarticle',
          component: privateAarticle,
        },
        {
          path: 'publicArticle',
          name: 'publicArticle',
          component: publicArticle,
        },
        {
          path: '',
          name: 'allArticle',
          component: allArticle,
        },
        {
          path: 'columnArticle',
          name: 'columnArticle',
          component: columnArticle
        },
        {
          path: 'statusArticle',
          name: 'statusArticle',
          component: statusArticle
        },
        {
          path: 'mycolums',
          name: 'mycolums',
          component: mycolums
        },
        {
          path: 'myjoincolums',
          name: myjoincolums,
          component: myjoincolums
        },
        {
          path: 'collectionAns',
          name: collectionAns,
          component: collectionAns
        },
        {
          path: 'collectionArticle',
          name: collectionArticle,
          component: collectionArticle
        },
        {
          path: 'collectionColums',
          name: collectionColums,
          component: collectionColums
        },
        {
          path: "myQue",
          name: "myQue",
          component: myQue
        },
        {
          path: "myAns",
          name: "myAns",
          component: myAns
        },
        {
          path: "ansStatus",
          name: "ansStatus",
          component: ansStatus
        }
      ]
    },

    {
      path: '/notices',
      name: 'notices',
      component: notices,
      children:[
        {
          path: '',
          name: 'aComment',
          component: aComment
        },
        {
          path: 'noticesettings',
          name: 'noticesettings',
          component: noticesettings
        },

        {
          path: 'activeMessage',
          name: 'activeMessage',
          component: activeMessage
        },

        {
          path: 'articleComment',
          name: 'articleComment',
          component: articleComment
        },

        {
          path: 'articlePush',
          name: 'articlePush',
          component: articlePush
        },

        {
          path: 'friendsMessage',
          name: 'friendsMessage',
          component: friendsMessage
        },

        {
          path: 'auditInformation',
          name: 'auditInformation',
          component: auditInformation
        },

        {
          path: 'friendVerification',
          name: 'friendVerification',
          component: friendVerification
        },

        {
          path: 'replyMessage',
          name: 'replyMessage',
          component: replyMessage
        },

        {
          path: 'thumbArticles',
          name: 'thumbArticles',
          component: thumbArticles
        },

        {
          path: 'thumbNews',
          name: 'thumbNews',
          component: thumbNews
        },




      ]
    },




  ]
})
