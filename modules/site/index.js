var siteMap = {
    'bbs.seedit.com': 1,
    'm.seedit.com': 2
};

exports.getIdByUrl = function (url) {
    for (var i in siteMap) {
        if (new RegExp(i).test(url)) {
            return siteMap[i];
        }
    }
    return 0;
};