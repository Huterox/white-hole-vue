import Vue from 'vue'
import Router from 'vue-router'
import treehole from "../views/home/treehole";
import homepage from "../views/home/homepage";
import quiz from "../views/home/quiz";
import quizshow from "../views/quizshow/quizshow"
import anslist from "../views/quizshow/anslist";
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
import forkArticle from "../views/myspace/article/forkArticle";
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
import userinfo from "../views/userInfo/userinfo";
import blogshowingme from "../views/blogs/blogshowingme";
import blogshow from "../views/blogs/blogshow";
import unityshow from "../views/community/communityshow/unityshow";
import ansshowinfo from "../views/quizshow/ansshowinfo";
import blogshowMerge from "../views/blogs/blogshowMerge";
import unityBlogList from "../views/community/communityshow/unityBlogList";
import unityQuizList from "../views/community/communityshow/unityQuizList";
import userblogList from "../views/userInfo/showlist/userblogList";
import useransList from "../views/userInfo/showlist/useransList";
import userquizList from "../views/userInfo/showlist/userquizList";
import userunityList from "../views/userInfo/showlist/userunityList";
import manageunity from "../views/myspace/manageunity/manageunity";
import columArticleList from "../views/myspace/article/columArticleList";
import unityArticleJoinList from "../views/myspace/manageunity/unityArticleJoinList";
import unityArticleList from "../views/myspace/manageunity/unityArticleList";
import unityQuizJoinList from "../views/myspace/manageunity/unityQuizJoinList";
import unityUserList from "../views/myspace/manageunity/unityUserList";
import unityUserJoinList from "../views/myspace/manageunity/unityUserJoinList";
import unityQuizAllList from "../views/myspace/manageunity/unityQuizAllList";
import unityQuizAnsJoinList from "../views/myspace/manageunity/unityQuizAnsJoinList";
Vue.use(Router)

export default new Router({
  // mode: "history",
  //首页的都是大模块所以必须保持独立
  routes: [

    {
      path:"/manageunity",
      name:"manageunity",
      component: manageunity,
      children:[
        {
          path: "",
          name: "unityArticleList",
          component: unityArticleList
        },
        {
          path: "unityArticleJoinList",
          name: "unityArticleJoinList",
          component: unityArticleJoinList
        },
        {
          path: "unityQuizAllList",
          name: "unityQuizAllList",
          component: unityQuizAllList
        },
        {
          path: "unityQuizJoinList",
          name: "unityQuizJoinList",
          component: unityQuizJoinList
        },
        {
          path: "unityUserList",
          name: "unityUserList",
          component: unityUserList
        },
        {
          path: "unityUserJoinList",
          name: "unityUserJoinList",
          component: unityUserJoinList
        },
        {
          path: "unityQuizAnsJoinList",
          name: "unityQuizAnsJoinList",
          component: unityQuizAnsJoinList,
        }
      ]

    },

    {
      path: '/blogshow',
      name: 'blogshow',
      component: blogshow
    },
    {
      path: '/blogshowMerge',
      name: 'blogshowMerge',
      component: blogshowMerge,
    }
,
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
          component: quizshow,
          children: [
            {
              path: "",
              name: "anlist",
              component: anslist
            },
            {
              path: "ansshowinfo",
              name: "ansshowinfo",
              component: ansshowinfo
            }
            ,
          ]

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
        },
      ]
    },
    {
      path: '/unityshow',
      name: 'unityshow',
      component: unityshow,
      children:[
        {
          path: "",
          name: "unityBlogList",
          component: unityBlogList
        },
        {
          path: "unityQuizList",
          name: "unityQuizList",
          component: unityQuizList
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

      path: "/userinfo",
      name: userinfo,
      component: userinfo,
      children:[
        {
          path: "",
          name: "userblogList",
          component: userblogList,
        },
        {
          path: "useransList",
          name: "useransList",
          component: useransList,
        },
        {
          path: "userquizList",
          name: "userquizList",
          component: userquizList,
        },
        {
          path: "userunityList",
          name: "userunityList",
          component: userunityList,
        }
      ]

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
          path: 'forkArticle',
          name: 'forkArticle',
          component: forkArticle,
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
          path: "columArticleList",
          name: "columArticleList",
          component: columArticleList,
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
        {
          path: '/blogshowingme',
          name: 'blogshowingme',
          component: blogshowingme
        },
      ]
    },




  ]
})
