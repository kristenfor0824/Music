/*
Navicat MySQL Data Transfer

Source Server         : demo
Source Server Version : 50096
Source Host           : localhost:3306
Source Database       : demo

Target Server Type    : MYSQL
Target Server Version : 50096
File Encoding         : 65001

Date: 2017-08-10 14:14:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for music
-- ----------------------------
DROP TABLE IF EXISTS `music`;
CREATE TABLE `music` (
  `id` int(11) NOT NULL auto_increment,
  `img` varchar(255) NOT NULL COMMENT '图片',
  `txt` varchar(255) NOT NULL COMMENT '文字备注',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of music
-- ----------------------------
INSERT INTO `music` VALUES ('1', './views/images/m1.jpg', '【节奏控】那些超带感音乐');
INSERT INTO `music` VALUES ('2', './views/images/m2.jpg', '【欧美男团】秒杀耳朵系列');
INSERT INTO `music` VALUES ('3', './views/images/m11.jpg', '极致噪音，入耳即醉');
INSERT INTO `music` VALUES ('4', './views/images/m12.jpg', '当女声邂逅电音：百首精选');
INSERT INTO `music` VALUES ('5', './views/images/m13.jpg', '适合玩游戏时听的BGM');
INSERT INTO `music` VALUES ('6', './views/images/m14.jpg', '【酷到没朋友】GBM燃点爆炸');
INSERT INTO `music` VALUES ('7', './views/images/m15.jpg', 'Despicable M3');
INSERT INTO `music` VALUES ('8', './views/images/m9.jpg', '带你走进音乐圈子');
INSERT INTO `music` VALUES ('9', './views/images/m7.jpg', '演员江一燕的文艺小江湖');
INSERT INTO `music` VALUES ('10', './views/images/m8.jpg', '用声音，至于每一个孤独患者');
