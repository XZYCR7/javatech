/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/0.styles.c8e24d81.css",
    "revision": "426d59bee3ee63d1cb6c45cd2ee5554e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.099a4943.js",
    "revision": "db12738edac6b8f30fe62c3eeca3dadc"
  },
  {
    "url": "assets/js/11.0b042c62.js",
    "revision": "196dd35215968867ae99aa0b955cfcaf"
  },
  {
    "url": "assets/js/12.ea27292e.js",
    "revision": "c0a4c104e675e5a8efa7475466949950"
  },
  {
    "url": "assets/js/13.20db5273.js",
    "revision": "56be20e2380b9c6e5570a9267a35da22"
  },
  {
    "url": "assets/js/14.d8e6d842.js",
    "revision": "657efccb3d288120546acdb59c59835f"
  },
  {
    "url": "assets/js/15.de81f84f.js",
    "revision": "2d32dda6ec98a6c326527dabb3068267"
  },
  {
    "url": "assets/js/16.ad0b439f.js",
    "revision": "ed1ad6ec0dff42c1c389f977a64a69d9"
  },
  {
    "url": "assets/js/17.8fffbeeb.js",
    "revision": "86a7f51edaf9ee6bcd8fe7afad0ba697"
  },
  {
    "url": "assets/js/18.337ada30.js",
    "revision": "ddef02d8a9f4c675661ca51cd7a80d74"
  },
  {
    "url": "assets/js/19.cee4dbd3.js",
    "revision": "1b55ff1805c7869970c72d40716fe5d0"
  },
  {
    "url": "assets/js/20.a0a03bdd.js",
    "revision": "31827638285bf5fcb725c054565fb85d"
  },
  {
    "url": "assets/js/21.2f375d66.js",
    "revision": "cea9b98b3adf8724af5aa2c263427b5e"
  },
  {
    "url": "assets/js/22.06edcb2e.js",
    "revision": "9c4f5b2ed0b562239b36a418e4fd2b1c"
  },
  {
    "url": "assets/js/23.e58617b8.js",
    "revision": "9c54f256d275c08f1832e93e4d7f83ce"
  },
  {
    "url": "assets/js/24.ebedfa49.js",
    "revision": "fc676ecdbae99feb3385f2e01b125a5d"
  },
  {
    "url": "assets/js/25.dcfd2adf.js",
    "revision": "25276605777d2b835697190bae50f772"
  },
  {
    "url": "assets/js/26.a5ea2a08.js",
    "revision": "0e0a291c100c2aeee9ab9c5c690dc40f"
  },
  {
    "url": "assets/js/27.88653b63.js",
    "revision": "2b19f9083d60017c11a7c51e71f85f8f"
  },
  {
    "url": "assets/js/28.a9d62563.js",
    "revision": "483e9a904c106f02b1a9c654338ad591"
  },
  {
    "url": "assets/js/29.46ec4d08.js",
    "revision": "6d8c83cc229fb7af60314306d7b7109b"
  },
  {
    "url": "assets/js/30.3db6f4da.js",
    "revision": "ea33975a72ea0139f0db90682318760c"
  },
  {
    "url": "assets/js/31.d52965cf.js",
    "revision": "258f5c10dec547f48100f84de208d48b"
  },
  {
    "url": "assets/js/32.39676723.js",
    "revision": "3216f76dfec175d15c1c4ff92aff41e6"
  },
  {
    "url": "assets/js/33.26eef671.js",
    "revision": "72ec424801bd05b77e78eb71d94a6e19"
  },
  {
    "url": "assets/js/34.6cb8ba8c.js",
    "revision": "0002a3dea7eb3b75c1ffcf3030029d4c"
  },
  {
    "url": "assets/js/35.ca666917.js",
    "revision": "d1d417aa0b69fa2cdc9473f9cc4cbdeb"
  },
  {
    "url": "assets/js/36.c2891b41.js",
    "revision": "e65df89254c03858fcf90189c7d2c1ac"
  },
  {
    "url": "assets/js/37.ae3b1a99.js",
    "revision": "5d346e5df79c488c717ff3f371a5be04"
  },
  {
    "url": "assets/js/38.2ca8e782.js",
    "revision": "9dee2edaebf8b596f44103112256ab32"
  },
  {
    "url": "assets/js/39.f55bfe8c.js",
    "revision": "3e80bc6b908a699a44e595e3205e4bff"
  },
  {
    "url": "assets/js/4.ed2dae46.js",
    "revision": "3ba11f02072cd133be9861fda056e3ca"
  },
  {
    "url": "assets/js/40.1c549148.js",
    "revision": "36bf3236dd7aa473c3a6c8c1758606f0"
  },
  {
    "url": "assets/js/41.faa56bbb.js",
    "revision": "e98747e1fad5ecf6e5613feba4cee0a5"
  },
  {
    "url": "assets/js/42.b771bd12.js",
    "revision": "5cf7d344a7bee60f57f77863406a9cc5"
  },
  {
    "url": "assets/js/43.2b7732da.js",
    "revision": "541dfe3dd5cf74355343083f457faa1b"
  },
  {
    "url": "assets/js/44.dbd29407.js",
    "revision": "86cfe91fbf78513be0cbe1ca40af12b4"
  },
  {
    "url": "assets/js/45.fbd2d13e.js",
    "revision": "e3101ac3d1b98dffd164899774741125"
  },
  {
    "url": "assets/js/46.37fdb6c0.js",
    "revision": "09885cacad5a74e78516126e6fe5395a"
  },
  {
    "url": "assets/js/47.ee8c3d83.js",
    "revision": "da3c9be3990a06fdc6ad7afcb75e75bb"
  },
  {
    "url": "assets/js/48.71eb5c8b.js",
    "revision": "1a6177f227528481892b321c79a6cea1"
  },
  {
    "url": "assets/js/49.f5644312.js",
    "revision": "4a1327a6d0e44c4132f868791ef65fb6"
  },
  {
    "url": "assets/js/5.03bf4309.js",
    "revision": "1ff6cada595bc62edd52226aed284145"
  },
  {
    "url": "assets/js/50.756f93ff.js",
    "revision": "335bf02eb3f7124a0c445667db377039"
  },
  {
    "url": "assets/js/51.d0e7860e.js",
    "revision": "973da6d3d71b7e4db0d574b4db7c17f4"
  },
  {
    "url": "assets/js/52.e3df1052.js",
    "revision": "563518261f14def109fdf57000578500"
  },
  {
    "url": "assets/js/53.ed247615.js",
    "revision": "f09d4f43499cee26462d2cd061e0f6bf"
  },
  {
    "url": "assets/js/54.a9302567.js",
    "revision": "deb50b2a9a08257a6f632f0cc61c0f13"
  },
  {
    "url": "assets/js/55.789b3f98.js",
    "revision": "6c81ea8071a82d8b8213b26a0446ef80"
  },
  {
    "url": "assets/js/56.621b25e3.js",
    "revision": "1db56deda1d0f71682722e6255641edd"
  },
  {
    "url": "assets/js/57.834de0c2.js",
    "revision": "c5a813282702e0c505a0ef4e66992bf0"
  },
  {
    "url": "assets/js/58.1d8bbb48.js",
    "revision": "801f6b04f8fca54c8f06376bdbf5c068"
  },
  {
    "url": "assets/js/59.0f3b3d90.js",
    "revision": "c673d492d455a5033958914e5293f31c"
  },
  {
    "url": "assets/js/6.b0260cf3.js",
    "revision": "9e71ab75d0bf8d10a0f9ba583551d4f3"
  },
  {
    "url": "assets/js/60.57596f56.js",
    "revision": "b4a076be58443fc97f8e0eaef4afa1ef"
  },
  {
    "url": "assets/js/61.4ac7689d.js",
    "revision": "7a4a5f715c5cab31cdeb8f7a55b8304f"
  },
  {
    "url": "assets/js/62.00d178e2.js",
    "revision": "fe533a0774fe9c1a069dc3fef0d314e8"
  },
  {
    "url": "assets/js/63.acc474af.js",
    "revision": "c0c42e8f64eabd5d61c6d951fc80b70f"
  },
  {
    "url": "assets/js/64.6f0a34b1.js",
    "revision": "92bfe280e4641c7f6204bd58862cb096"
  },
  {
    "url": "assets/js/65.54aa2a6b.js",
    "revision": "2a770a4f2087129cd9087e60db8b4989"
  },
  {
    "url": "assets/js/66.25d0094b.js",
    "revision": "187847664046d5bec0fdde0788ab2f03"
  },
  {
    "url": "assets/js/67.718c1a8c.js",
    "revision": "9a3e658a62f6a99de3b346cef439bd69"
  },
  {
    "url": "assets/js/68.aef60b0f.js",
    "revision": "24a2ac1e7920b527d11f64652c7438b3"
  },
  {
    "url": "assets/js/69.d0dea9e8.js",
    "revision": "bd975c264ede783e4fd61325a6f1336d"
  },
  {
    "url": "assets/js/7.7e09c600.js",
    "revision": "406868a4e630804cb506dca51776ad0b"
  },
  {
    "url": "assets/js/70.0b15bf58.js",
    "revision": "69d86000b987c9eb112ee3b61246e7a6"
  },
  {
    "url": "assets/js/8.0af92859.js",
    "revision": "552673a437908ceedc0f36a5961baaee"
  },
  {
    "url": "assets/js/9.d6f90f97.js",
    "revision": "304556df566f275d2b657a135441afaa"
  },
  {
    "url": "assets/js/app.d2f5a05e.js",
    "revision": "e76f2ce5da2ec18fd86f44dc4e156435"
  },
  {
    "url": "assets/js/vendors~flowchart.16fe5c35.js",
    "revision": "6f1363afe314ec7cb1c8e6bc9fa98fbc"
  },
  {
    "url": "assets/js/vendors~notification.ffada997.js",
    "revision": "c4bbafc68016576dead5099c0afe0a81"
  },
  {
    "url": "cache/CacheInterview.html",
    "revision": "5c476ea51197234cfb3fe16c1fda8e46"
  },
  {
    "url": "cache/Caffeine.html",
    "revision": "bced9b380c5a4c838b3713cc6823cc71"
  },
  {
    "url": "cache/Ehcache.html",
    "revision": "bd2687d616c1f2dfe34bd209d64a8a81"
  },
  {
    "url": "cache/index.html",
    "revision": "f1c5f6f030674b2a238f8b39d1acd176"
  },
  {
    "url": "framework/index.html",
    "revision": "64d81ae3c6d422b7ed62c87a918ac5f8"
  },
  {
    "url": "framework/mybatis.html",
    "revision": "c1eb224ba55955f53eb8a3e9af8c2c2f"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "b953d405f5b0da4f6c06af73cc2eb50d"
  },
  {
    "url": "lib/bean/dozer.html",
    "revision": "a4a018104c01f04dc698f6c8e38163e0"
  },
  {
    "url": "lib/bean/lombok.html",
    "revision": "b5e84fcc1db554b0c96c1b9417ad4e8c"
  },
  {
    "url": "lib/index.html",
    "revision": "6b0d6db9e3380dda5b784f591a62ca9e"
  },
  {
    "url": "lib/javalib-log.html",
    "revision": "9e2a3228a5c7a2f14a8e1445d63f69ee"
  },
  {
    "url": "lib/javalib-util.html",
    "revision": "12162251293609e146ad3665b0e5fb0e"
  },
  {
    "url": "lib/javamail.html",
    "revision": "e50805f1b51ef7449c4ab9335c7e69b7"
  },
  {
    "url": "lib/jsoup.html",
    "revision": "4a6e8c5487369c98a1f8a85be76c92d2"
  },
  {
    "url": "lib/reflections.html",
    "revision": "1dec08cfb44fb759e72fb55da10d50c4"
  },
  {
    "url": "lib/serialized/index.html",
    "revision": "07d04b76e53bf16af5f686724541a722"
  },
  {
    "url": "lib/serialized/javalib-binary.html",
    "revision": "7c011905f2b791bfd33860a2770c0747"
  },
  {
    "url": "lib/serialized/javalib-json.html",
    "revision": "f196f588f5c023e75500cd4ddbabe4c1"
  },
  {
    "url": "lib/template/freemark.html",
    "revision": "460d5b9ee872fc62312052a1fd082542"
  },
  {
    "url": "lib/template/index.html",
    "revision": "3956ee43e879cfc8103250dfb48eb315"
  },
  {
    "url": "lib/template/thymeleaf.html",
    "revision": "87d9f3a612a3577d0441bc0783dd7749"
  },
  {
    "url": "lib/template/velocity.html",
    "revision": "a051de465951d833c334f0bbde3019b9"
  },
  {
    "url": "lib/thumbnailator.html",
    "revision": "9f6bc76f018aacd3eaa5432b0d185419"
  },
  {
    "url": "lib/zxing.html",
    "revision": "02f705dee118e6ba2d78d0fd6126f737"
  },
  {
    "url": "mq/activemq.html",
    "revision": "b5ddec2ee7863208993e3ffcd8528565"
  },
  {
    "url": "mq/index.html",
    "revision": "6bd8cddb030c4675ed44ed6ab62bbc52"
  },
  {
    "url": "mq/kafka/index.html",
    "revision": "06cb83c47f89f23a6080a363b2362e4c"
  },
  {
    "url": "mq/kafka/kafka-advance.html",
    "revision": "1361c01cab3b4a44842aebe8fcb67178"
  },
  {
    "url": "mq/kafka/kafka-basic.html",
    "revision": "1f98e85fef1b4826f1ff7ae690776a23"
  },
  {
    "url": "mq/kafka/kafka-ops.html",
    "revision": "58161f8f67adcd3cc2be666cfd89a06f"
  },
  {
    "url": "mq/rocketmq.html",
    "revision": "e4c5dfa5bc57ce03a4914e3eaeef6cd8"
  },
  {
    "url": "search/elastic-beats-ops.html",
    "revision": "034892a6f1f78cc17be6fc4051cbe89c"
  },
  {
    "url": "search/elastic-beats.html",
    "revision": "10cb000816050dd41802eb005169f6cd"
  },
  {
    "url": "search/elastic-kibana-ops.html",
    "revision": "310acc731ec17e1c3f1dacb5e1ec61ca"
  },
  {
    "url": "search/elastic-kibana.html",
    "revision": "10d75f5a79caa9a8c3a20f375d1f8162"
  },
  {
    "url": "search/elastic-logstash-ops.html",
    "revision": "6b88b25bb8c4e0e14a1ea33ce4282954"
  },
  {
    "url": "search/elastic-logstash.html",
    "revision": "1d62c581530910c12126dcff21f13c0c"
  },
  {
    "url": "search/elastic-quickstart.html",
    "revision": "a69be7cdcc037fcdb258be3c66209848"
  },
  {
    "url": "search/elasticsearch/elasticsearch-ops.html",
    "revision": "a4f21d6b1bae90fc25f95697e27de166"
  },
  {
    "url": "search/elasticsearch/elasticsearch.html",
    "revision": "244b19c27aedf1c7c54a1059d72efd7d"
  },
  {
    "url": "search/elasticsearch/index.html",
    "revision": "342f9d636b9f345fbfa0372a22e2bffa"
  },
  {
    "url": "search/index.html",
    "revision": "50b4168a99678acaaa11cf62ad622387"
  },
  {
    "url": "security/index.html",
    "revision": "9dc09a7d5a21694856bc7ec170e4b57f"
  },
  {
    "url": "security/shiro.html",
    "revision": "39f7b88804d90da3458bf9c8f569ac4f"
  },
  {
    "url": "security/spring-security.html",
    "revision": "cc27caff2f05a456687d3a0fda3ba39f"
  },
  {
    "url": "server/index.html",
    "revision": "bb7a58fe56a648469c092fca74b818ef"
  },
  {
    "url": "server/jetty.html",
    "revision": "0ae2c3993a07a81f263bee82445cca7c"
  },
  {
    "url": "server/tomcat.html",
    "revision": "d18b85f4af93ebfc16b7f3d929dd768b"
  },
  {
    "url": "soa/dubbo.html",
    "revision": "faf91856190d1ea4a9c52fe8e36a1b71"
  },
  {
    "url": "soa/index.html",
    "revision": "1a9df95cae838b874c072605f3f6be70"
  },
  {
    "url": "soa/netty.html",
    "revision": "c52f29ed81beed6428e4164eb6f34f85"
  },
  {
    "url": "soa/zookeeper/index.html",
    "revision": "0179d36395abe0fc919ca068a7f3491a"
  },
  {
    "url": "soa/zookeeper/zookeeper-ops.html",
    "revision": "de2a8dd3f93f9ac8fc673862cc26dc05"
  },
  {
    "url": "soa/zookeeper/zookeeper.html",
    "revision": "e495fd9ff81bbc4a13829a1d9dec4789"
  },
  {
    "url": "storage/index.html",
    "revision": "2e23b311f3bdc145a705468017acfbc3"
  },
  {
    "url": "storage/shardingsphere.html",
    "revision": "71a28e0c8263340fbf4c56e549221bdc"
  },
  {
    "url": "test/index.html",
    "revision": "5515ff16bafe5c69f7d3caabdc55b83f"
  },
  {
    "url": "test/jmeter.html",
    "revision": "228fc96075bd3aaa9ca1bfa260ea0cb0"
  },
  {
    "url": "test/jmh.html",
    "revision": "f12c5d97c38acc5424458539bbd706a8"
  },
  {
    "url": "test/junit.html",
    "revision": "1414578c9f4377014de87132ff06f9ce"
  },
  {
    "url": "test/mockito.html",
    "revision": "0de02237073fc954848260f635cd075c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
