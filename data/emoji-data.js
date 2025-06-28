"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Modified to make all emojis available and update image paths
var emojiData = {
    atlases: ["default", "oneside"],
    emojis: [
        {
            id: 100000,
            character: "优",
            available: true,
            image: "/emoji-images/100000.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100001,
            character: "伙",
            available: true,
            image: "/emoji-images/100001.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100002,
            character: "会",
            available: true,
            image: "/emoji-images/100002.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100003,
            character: "伛",
            available: true,
            image: "/emoji-images/100003.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100004,
            character: "伜",
            available: true,
            image: "/emoji-images/100004.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100005,
            character: "伝",
            available: true,
            image: "/emoji-images/100005.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100006,
            character: "伞",
            available: true,
            image: "/emoji-images/100006.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100007,
            character: "伟",
            available: true,
            image: "/emoji-images/100007.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100008,
            character: "传",
            available: true,
            image: "/emoji-images/100008.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100009,
            character: "伡",
            available: true,
            image: "/emoji-images/100009.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100010,
            character: "伣",
            available: true,
            image: "/emoji-images/100010.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100011,
            character: "伤",
            available: true,
            image: "/emoji-images/100011.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100012,
            character: "伥",
            available: true,
            image: "/emoji-images/100012.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100013,
            character: "伦",
            available: true,
            image: "/emoji-images/100013.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100014,
            character: "伨",
            available: true,
            image: "/emoji-images/100014.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100015,
            character: "伩",
            available: true,
            image: "/emoji-images/100015.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100016,
            character: "伪",
            available: true,
            image: "/emoji-images/100016.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100017,
            character: "伫",
            available: true,
            image: "/emoji-images/100017.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100018,
            character: "伬",
            available: true,
            image: "/emoji-images/100018.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100019,
            character: "伭",
            available: true,
            image: "/emoji-images/100019.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100020,
            character: "伺",
            available: true,
            image: "/emoji-images/100020.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100021,
            character: "伻",
            available: true,
            image: "/emoji-images/100021.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100022,
            character: "似",
            available: true,
            image: "/emoji-images/100022.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100023,
            character: "伽",
            available: true,
            image: "/emoji-images/100023.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100024,
            character: "佁",
            available: true,
            image: "/emoji-images/100024.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100025,
            character: "佂",
            available: true,
            image: "/emoji-images/100025.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100026,
            character: "佃",
            available: true,
            image: "/emoji-images/100026.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100027,
            character: "佄",
            available: true,
            image: "/emoji-images/100027.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100028,
            character: "佅",
            available: true,
            image: "/emoji-images/100028.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100029,
            character: "但",
            available: true,
            image: "/emoji-images/100029.svg", // Updated image path
            category: "Стандартное",
        },
        {
            id: 100030,
            character: "侲",
            available: true,
            image: "/emoji-images/100030.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100031,
            character: "侳",
            available: true,
            image: "/emoji-images/100031.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100032,
            character: "侴",
            available: true,
            image: "/emoji-images/100032.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100033,
            character: "侵",
            available: true,
            image: "/emoji-images/100033.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100034,
            character: "侶",
            available: true,
            image: "/emoji-images/100034.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100035,
            character: "侷",
            available: true,
            image: "/emoji-images/100035.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100036,
            character: "侸",
            available: true,
            image: "/emoji-images/100036.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100037,
            character: "侹",
            available: true,
            image: "/emoji-images/100037.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100038,
            character: "侺",
            available: true,
            image: "/emoji-images/100038.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100039,
            character: "侻",
            available: true,
            image: "/emoji-images/100039.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100040,
            character: "侼",
            available: true,
            image: "/emoji-images/100040.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100041,
            character: "侽",
            available: true,
            image: "/emoji-images/100041.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100042,
            character: "侾",
            available: true,
            image: "/emoji-images/100042.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100043,
            character: "便",
            available: true,
            image: "/emoji-images/100043.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100044,
            character: "俀",
            available: true,
            image: "/emoji-images/100044.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100045,
            character: "俁",
            available: true,
            image: "/emoji-images/100045.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100046,
            character: "係",
            available: true,
            image: "/emoji-images/100046.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100047,
            character: "促",
            available: true,
            image: "/emoji-images/100047.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100048,
            character: "俄",
            available: true,
            image: "/emoji-images/100048.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100049,
            character: "俅",
            available: true,
            image: "/emoji-images/100049.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100050,
            character: "俆",
            available: true,
            image: "/emoji-images/100050.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100051,
            character: "俇",
            available: true,
            image: "/emoji-images/100051.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100052,
            character: "俈",
            available: true,
            image: "/emoji-images/100052.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100053,
            character: "俉",
            available: true,
            image: "/emoji-images/100053.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100054,
            character: "俊",
            available: true,
            image: "/emoji-images/100054.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100055,
            character: "俋",
            available: true,
            image: "/emoji-images/100055.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100056,
            character: "俌",
            available: true,
            image: "/emoji-images/100056.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100057,
            character: "俍",
            available: true,
            image: "/emoji-images/100057.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100058,
            character: "俎",
            available: true,
            image: "/emoji-images/100058.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100059,
            character: "俏",
            available: true,
            image: "/emoji-images/100059.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100060,
            character: "俐",
            available: true,
            image: "/emoji-images/100060.svg", // Updated image path
            category: "Новый Год",
        },
        {
            id: 100061,
            character: "俑",
            available: true,
            image: "/emoji-images/100061.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100062,
            character: "俒",
            available: true,
            image: "/emoji-images/100062.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100063,
            character: "俓",
            available: true,
            image: "/emoji-images/100063.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100064,
            character: "俔",
            available: true,
            image: "/emoji-images/100064.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100065,
            character: "俕",
            available: true,
            image: "/emoji-images/100065.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100066,
            character: "俖",
            available: true,
            image: "/emoji-images/100066.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100067,
            character: "俗",
            available: true,
            image: "/emoji-images/100067.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100068,
            character: "俘",
            available: true,
            image: "/emoji-images/100068.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100069,
            character: "俙",
            available: true,
            image: "/emoji-images/100069.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100070,
            character: "俚",
            available: true,
            image: "/emoji-images/100070.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100071,
            character: "俛",
            available: true,
            image: "/emoji-images/100071.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100072,
            character: "俜",
            available: true,
            image: "/emoji-images/100072.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100073,
            character: "保",
            available: true,
            image: "/emoji-images/100073.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100074,
            character: "俞",
            available: true,
            image: "/emoji-images/100074.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100075,
            character: "俟",
            available: true,
            image: "/emoji-images/100075.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100076,
            character: "俠",
            available: true,
            image: "/emoji-images/100076.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100077,
            character: "信",
            available: true,
            image: "/emoji-images/100077.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100078,
            character: "俢",
            available: true,
            image: "/emoji-images/100078.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100079,
            character: "俣",
            available: true,
            image: "/emoji-images/100079.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100080,
            character: "俤",
            available: true,
            image: "/emoji-images/100080.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100081,
            character: "俥",
            available: true,
            image: "/emoji-images/100081.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100082,
            character: "俦",
            available: true,
            image: "/emoji-images/100082.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100083,
            character: "俧",
            available: true,
            image: "/emoji-images/100083.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100084,
            character: "俨",
            available: true,
            image: "/emoji-images/100084.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100085,
            character: "俩",
            available: true,
            image: "/emoji-images/100085.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100086,
            character: "俪",
            available: true,
            image: "/emoji-images/100086.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100087,
            character: "俫",
            available: true,
            image: "/emoji-images/100087.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100088,
            character: "俬",
            available: true,
            image: "/emoji-images/100088.svg", // Updated image path
            category: "Техно",
        },
        {
            id: 100089,
            character: "倳",
            available: true,
            image: "/emoji-images/100089.svg", // Updated image path
            category: "14 февраля",
        },
        {
            id: 100090,
            character: "倴",
            available: true,
            image: "/emoji-images/100090.svg", // Updated image path
            category: "14 февраля",
        },
        {
            id: 100091,
            character: "倵",
            available: true,
            image: "/emoji-images/100091.svg", // Updated image path
            category: "14 февраля",
        },
        {
            id: 100092,
            character: "倶",
            available: true,
            image: "/emoji-images/100092.svg", // Updated image path
            category: "14 февраля",
        },
        {
            id: 100093,
            character: "倷",
            available: true,
            image: "/emoji-images/100093.svg", // Updated image path
            category: "14 февраля",
        },
        {
            id: 100094,
            character: "倸",
            available: true,
            image: "/emoji-images/100094.svg", // Updated image path
            category: "14 февраля",
        },
        {
            id: 100095,
            character: "倹",
            available: true,
            image: "/emoji-images/100095.svg", // Updated image path
            category: "14 февраля",
        },
        {
            id: 100096,
            character: "债",
            available: true,
            image: "/emoji-images/100096.svg", // Updated image path
            category: "14 февраля",
        },
        {
            id: 100097,
            character: "值",
            available: true,
            image: "/emoji-images/100097.svg", // Updated image path
            category: "23 февраля",
        },
        {
            id: 100098,
            character: "倽",
            available: true,
            image: "/emoji-images/100098.svg", // Updated image path
            category: "23 февраля",
        },
        {
            id: 100099,
            character: "倾",
            available: true,
            image: "/emoji-images/100099.svg", // Updated image path
            category: "23 февраля",
        },
        {
            id: 100100,
            character: "倿",
            available: true,
            image: "/emoji-images/100100.svg", // Updated image path
            category: "23 февраля",
        },
        {
            id: 100101,
            character: "偀",
            available: true,
            image: "/emoji-images/100101.svg", // Updated image path
            category: "23 февраля",
        },
        {
            id: 100102,
            character: "偋",
            available: true,
            image: "/emoji-images/100102.svg", // Updated image path
            category: "Котик-готик",
        },
        {
            id: 100103,
            character: "偌",
            available: true,
            image: "/emoji-images/100103.svg", // Updated image path
            category: "Котик-готик",
        },
        {
            id: 100104,
            character: "偍",
            available: true,
            image: "/emoji-images/100104.svg", // Updated image path
            category: "Котик-готик",
        },
        {
            id: 100105,
            character: "偎",
            available: true,
            image: "/emoji-images/100105.svg", // Updated image path
            category: "Котик-готик",
        },
        {
            id: 100106,
            character: "偏",
            available: true,
            image: "/emoji-images/100106.svg", // Updated image path
            category: "Котик-готик",
        },
        {
            id: 100107,
            character: "偐",
            available: true,
            image: "/emoji-images/100107.svg", // Updated image path
            category: "Котик-готик",
        },
        {
            id: 100108,
            character: "偑",
            available: true,
            image: "/emoji-images/100108.svg", // Updated image path
            category: "Котик-готик",
        },
        {
            id: 100109,
            character: "偒",
            available: true,
            image: "/emoji-images/100109.svg", // Updated image path
            category: "Котик-готик",
        },
        {
            id: 100110,
            character: "偓",
            available: true,
            image: "/emoji-images/100110.svg", // Updated image path
            category: "Котик-готик",
        },
        {
            id: 100111,
            character: "偔",
            available: true,
            image: "/emoji-images/100111.svg", // Updated image path
            category: "Котик-готик",
        },
        {
            id: 100112,
            character: "偕",
            available: true,
            image: "/emoji-images/100112.svg", // Updated image path
            category: "Котик-готик",
        },
        {
            id: 100113,
            character: "偖",
            available: true,
            image: "/emoji-images/100113.svg", // Updated image path
            category: "Котик-готик",
        },
        {
            id: 100114,
            character: "偗",
            available: true,
            image: "/emoji-images/100114.svg", // Updated image path
            category: "Котик-готик",
        },
        {
            id: 100115,
            character: "偘",
            available: true,
            image: "/emoji-images/100115.svg", // Updated image path
            category: "Котик-готик",
        },
        {
            id: 100116,
            character: "偙",
            available: true,
            image: "/emoji-images/100116.svg", // Updated image path
            category: "Котик-готик",
        },
        {
            id: 100117,
            character: "做",
            available: true,
            image: "/emoji-images/100117.svg", // Updated image path
            category: "Котик-готик",
        },
        {
            id: 100118,
            character: "偛",
            available: true,
            image: "/emoji-images/100118.svg", // Updated image path
            category: "Котик-готик",
        },
        {
            id: 100119,
            character: "停",
            available: true,
            image: "/emoji-images/100119.svg", // Updated image path
            category: "Котик-готик",
        },
        {
            id: 100120,
            character: "偝",
            available: true,
            image: "/emoji-images/100120.svg", // Updated image path
            category: "Котик-готик",
        },
        {
            id: 100121,
            character: "偞",
            available: true,
            image: "/emoji-images/100121.svg", // Updated image path
            category: "Котик-готик",
        },
        {
            id: 100122,
            character: "偟",
            available: true,
            image: "/emoji-images/100122.svg", // Updated image path
            category: "Котик-готик",
        },
        {
            id: 100123,
            character: "偠",
            available: true,
            image: "/emoji-images/100123.svg", // Updated image path
            category: "Котик-готик",
        },
        {
            id: 100124,
            character: "偡",
            available: true,
            image: "/emoji-images/100124.svg", // Updated image path
            category: "Котик-готик",
        },
        {
            id: 100125,
            character: "偢",
            available: true,
            image: "/emoji-images/100125.svg", // Updated image path
            category: "Котик-готик",
        },
        {
            id: 100126,
            character: "偤",
            available: true,
            image: "/emoji-images/100126.svg", // Updated image path
            category: "Игра в кальмара",
        },
        {
            id: 100127,
            character: "健",
            available: true,
            image: "/emoji-images/100127.svg", // Updated image path
            category: "Игра в кальмара",
        },
        {
            id: 100128,
            character: "偦",
            available: true,
            image: "/emoji-images/100128.svg", // Updated image path
            category: "Игра в кальмара",
        },
        {
            id: 100129,
            character: "偧",
            available: true,
            image: "/emoji-images/100129.svg", // Updated image path
            category: "Игра в кальмара",
        },
        {
            id: 100130,
            character: "傅",
            available: true,
            image: "/emoji-images/100130.svg", // Updated image path
            category: "Майнкрафт",
        },
        {
            id: 100131,
            character: "傄",
            available: true,
            image: "/emoji-images/100131.svg", // Updated image path
            category: "Майнкрафт",
        },
        {
            id: 100132,
            character: "傃",
            available: true,
            image: "/emoji-images/100132.svg", // Updated image path
            category: "Майнкрафт",
        },
        {
            id: 100133,
            character: "傂",
            available: true,
            image: "/emoji-images/100133.svg", // Updated image path
            category: "Майнкрафт",
        },
        {
            id: 100134,
            character: "傁",
            available: true,
            image: "/emoji-images/100134.svg", // Updated image path
            category: "Майнкрафт",
        },
        {
            id: 100135,
            character: "傀",
            available: true,
            image: "/emoji-images/100135.svg", // Updated image path
            category: "Майнкрафт",
        },
        {
            id: 100136,
            character: "偿",
            available: true,
            image: "/emoji-images/100136.svg", // Updated image path
            category: "Майнкрафт",
        },
        {
            id: 100137,
            character: "偾",
            available: true,
            image: "/emoji-images/100137.svg", // Updated image path
            category: "Майнкрафт",
        },
        {
            id: 100138,
            character: "偽",
            available: true,
            image: "/emoji-images/100138.svg", // Updated image path
            category: "Майнкрафт",
        },
        {
            id: 100139,
            character: "偼",
            available: true,
            image: "/emoji-images/100139.svg", // Updated image path
            category: "Майнкрафт",
        },
        {
            id: 100140,
            character: "偻",
            available: true,
            image: "/emoji-images/100140.svg", // Updated image path
            category: "Майнкрафт",
        },
        {
            id: 100141,
            character: "偺",
            available: true,
            image: "/emoji-images/100141.svg", // Updated image path
            category: "Майнкрафт",
        },
        {
            id: 100142,
            character: "偹",
            available: true,
            image: "/emoji-images/100142.svg", // Updated image path
            category: "Майнкрафт",
        },
        {
            id: 100143,
            character: "偸",
            available: true,
            image: "/emoji-images/100143.svg", // Updated image path
            category: "Майнкрафт",
        },
        {
            id: 100144,
            character: "偷",
            available: true,
            image: "/emoji-images/100144.svg", // Updated image path
            category: "Майнкрафт",
        },
        {
            id: 100145,
            character: "偶",
            available: true,
            image: "/emoji-images/100145.svg", // Updated image path
            category: "Майнкрафт",
        },
        {
            id: 100146,
            character: "偵",
            available: true,
            image: "/emoji-images/100146.svg", // Updated image path
            category: "Майнкрафт",
        },
        {
            id: 100147,
            character: "側",
            available: true,
            image: "/emoji-images/100147.svg", // Updated image path
            category: "Майнкрафт",
        },
        {
            id: 100148,
            character: "偳",
            available: true,
            image: "/emoji-images/100148.svg", // Updated image path
            category: "Майнкрафт",
        },
        {
            id: 100149,
            character: "偲",
            available: true,
            image: "/emoji-images/100149.svg", // Updated image path
            category: "Майнкрафт",
        },
    ],
};
// This is a simplified version - the actual data file would contain all 150 emojis
// with their properties, but all with available: true and corrected image paths
exports.default = emojiData;
