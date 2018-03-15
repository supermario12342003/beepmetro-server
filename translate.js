//translate.js

var fs = require('fs');
var readline = require('readline');
var i18n = require("i18n");

var i18nConfig = require("./config.js").i18nConfig;

var excludes = ["node_modules", "translate.js", "db", "locales", "test"]

var scanDir = function(dirname, rec=true, exts=['js']) {
	fs.readdir(dirname, function(err, filenames) {
		if (err) {
			onError(err);
			return;
		}
		filenames.forEach(function(filename) {
			var stats = null;
			if (excludes.includes(filename))
				return ;
			try {
				stats = fs.lstatSync(dirname + filename);
				if (stats && stats.isDirectory() && rec) {
					scanDir(dirname + filename + "/", exts);
					return;
				}
			}
			catch(err) {
				console.error(err.message);
			}

			if (exts.includes(getExt(filename))) {
				var rd = readline.createInterface({
					input: fs.createReadStream(dirname + filename),
					console: false
				});

				rd.on('line', scanLine);
			}
		})
	});
}

var getExt = function(filename) {
	var re = /(?:\.([^.]+))?$/;
	var ext = re.exec(filename)[1];
	return ext;
}

var onError = function(err) {
	console.error(err);
}



var locale = process.argv[2];
if (!locale)
	locale = "en";
else if (locale == "all") {
	const { spawn } = require('child_process');

	i18nConfig.locales.forEach((locale) => {
		spawn("node " + __dirname + "/translate.js " + locale, {
			stdio: 'inherit',
			shell: true},
			(err, stdout, stderr) => {
				if (err) {
					console.error(`exec error: ${err}`);
					return;
				}
			}
		);
	})
	return;
}
i18n.configure(i18nConfig);
i18n.setLocale(locale);
fs.readFile(i18nConfig.directory + "/" + locale + ".js", 'utf8', function (err, data) {
	if (err) throw err;
	var obj = JSON.parse(data);
	scanDir('./');
});

var scanLine = function(line) {
	var cat = i18n.getCatalog(i18n.getLocale());
	try {
		var re = /__\([',"](.+)[',"]\)/;
		var ret = re.exec(line)
		if (ret) {
			if (!(ret[1] in cat)) {
				console.log(i18n.getLocale(), "added -> ", ret[1]);
				i18n.__(ret[1])
			}
		}
		re = /__n\(([^)]*)\)/;
		ret = re.exec(line)
		if (ret) {
			var args = JSON.parse("[" + ret[1] + "]")
			if (!(args[0] in cat)) {
				console.log(i18n.getLocale(), "added -> ", args[0]);
				i18n.__n(...args);
			}
		}
		re = /__mf\(([^\)]*)\)/;
		ret = re.exec(line)
		if (ret) {
			var args = JSON.parse("[" + ret[1] + "]")
			if (!(args[0] in cat)) {
				console.log(i18n.getLocale(), "added -> ", args[0]);
				i18n.__mf(...args);
			}
		}
	}
	catch (err) {
		console.error(err.message);
		console.log(line);
	}
}
