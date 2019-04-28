const obj = {
	partType: 'ISM',
	preview: 'p1234'
}

const str = '/part/:partType/detail/:preview'

let reg = /:[^\/]+\/?/g

let list = str.match(reg)

if (list && list.length) {
	let path = str
	list.forEach(item => {
		let index = item.indexOf('/')
		if (index > 0) {
			item = item.slice(0, index)
		}
		console.log(item.slice(1, item.length))
		path = path.replace(item, obj[item.slice(1, item.length)])
	})
	console.log(path)
}
