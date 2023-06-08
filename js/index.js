const danger = document.querySelector('.danger')
let radios = document.querySelectorAll('.radio')
let root = document.documentElement
let index = 0

let stockNum = 0
let absolutNum = 0
let jackNum = 0
let zoNum = 0
let sopNum = 0

let jimNum = 0
let colaNum = 0
let zubrNum = 0
let warkaNum = 0
let spirytusNum = 0
let cisowiankaNum = 0

let wybor = ''

let koszyk = false
let dostawa = false
let platnosc = false

let basketSum = 0

const addStock = () => {
	stockNum = stockNum + parseInt(stock.value)
	stock.value = 1
	showAlert()
	checkNum()
	countAlko()
}

const addAbsolut = () => {
	absolutNum = absolutNum + parseInt(absolut.value)
	absolut.value = 1
	showAlert()
	checkNum()
	countAlko()
}

const addJack = () => {
	jackNum = jackNum + parseInt(jack.value)
	jack.value = 1
	showAlert()
	checkNum()
	countAlko()
}

const addZo = () => {
	zoNum = zoNum + parseInt(zo.value)
	zo.value = 1
	showAlert()
	checkNum()
	countAlko()
}

const addSop = () => {
	sopNum = sopNum + parseInt(sop.value)
	sop.value = 1
	showAlert()
	checkNum()
	countAlko()
}

const addJim = () => {
	jimNum = jimNum + parseInt(jim.value)
	jim.value = 1
	showAlert()
	checkNum()
	countAlko()
}

const addCola = () => {
	colaNum = colaNum + parseInt(cola.value)
	cola.value = 1
	showAlert()
	checkNum()
	countAlko()
}

const addZubr = () => {
	zubrNum = zubrNum + parseInt(zubr.value)
	zubr.value = 1
	showAlert()
	checkNum()
	countAlko()
}

const addWarka = () => {
	warkaNum = warkaNum + parseInt(warka.value)
	warka.value = 1
	showAlert()
	checkNum()
	countAlko()
}

const addSpirytus = () => {
	spirytusNum = spirytusNum + parseInt(spirytus.value)
	spirytus.value = 1
	showAlert()
	checkNum()
	countAlko()
}

const addCisowianka = () => {
	cisowiankaNum = cisowiankaNum + parseInt(cisowianka.value)
	cisowianka.value = 1
	showAlert()
	checkNum()
	countAlko()
}

const checkNum = () => {
	if (
		stockNum === 0 &&
		absolutNum === 0 &&
		jackNum === 0 &&
		zoNum === 0 &&
		sopNum === 0 &&
		jimNum === 0 &&
		colaNum === 0 &&
		zubrNum === 0 &&
		warkaNum === 0 &&
		spirytusNum === 0 &&
		cisowiankaNum === 0
	) {
		danger.style.display = 'none'
		pusto.style.display = 'block'
		clearBasketBtn.style.display = 'none'
		Sto()
		Abs()
		Jac()
		Zo()
		Sop()
		Jim()
		Cola()
		Zubr()
		Warka()
		Spirytus()
		Cisowianka()
	} else {
		danger.style.display = 'block'
		pusto.style.display = 'none'
		clearBasketBtn.style.display = 'block'
		Sto()
		Abs()
		Jac()
		Zo()
		Sop()
		Jim()
		Cola()
		Zubr()
		Warka()
		Spirytus()
		Cisowianka()
		checkBasket()
	}
}

const Sto = () => {
	if (stockNum !== 0) {
		stockItem.style.display = 'flex'
	} else {
		stockItem.style.display = 'none'
	}
}

const Abs = () => {
	if (absolutNum !== 0) {
		absolutItem.style.display = 'flex'
	} else {
		absolutItem.style.display = 'none'
	}
}

const Jac = () => {
	if (jackNum !== 0) {
		jackItem.style.display = 'flex'
	} else {
		jackItem.style.display = 'none'
	}
}

const Zo = () => {
	if (zoNum !== 0) {
		zoItem.style.display = 'flex'
	} else {
		zoItem.style.display = 'none'
	}
}

const Sop = () => {
	if (sopNum !== 0) {
		sopItem.style.display = 'flex'
	} else {
		sopItem.style.display = 'none'
	}
}

const Jim = () => {
	if (jimNum !== 0) {
		jimItem.style.display = 'flex'
	} else {
		jimItem.style.display = 'none'
	}
}

const Cola = () => {
	if (colaNum !== 0) {
		colaItem.style.display = 'flex'
	} else {
		colaItem.style.display = 'none'
	}
}

const Zubr = () => {
	if (zubrNum !== 0) {
		zubrItem.style.display = 'flex'
	} else {
		zubrItem.style.display = 'none'
	}
}

const Warka = () => {
	if (warkaNum !== 0) {
		warkaItem.style.display = 'flex'
	} else {
		warkaItem.style.display = 'none'
	}
}

const Spirytus = () => {
	if (spirytusNum !== 0) {
		spirytusItem.style.display = 'flex'
	} else {
		spirytusItem.style.display = 'none'
	}
}

const Cisowianka = () => {
	if (cisowiankaNum !== 0) {
		cisowiankaItem.style.display = 'flex'
	} else {
		cisowiankaItem.style.display = 'none'
	}
}

const countAlko = () => {
	iloscStock.textContent = `${stockNum}x`
	iloscAbsolut.textContent = `${absolutNum}x`
	iloscJack.textContent = `${jackNum}x`
	iloscZo.textContent = `${zoNum}x`
	iloscSop.textContent = `${sopNum}x`
	iloscJim.textContent = `${jimNum}x`
	iloscCola.textContent = `${colaNum}x`
	iloscZubr.textContent = `${zubrNum}x`
	iloscWarka.textContent = `${warkaNum}x`
	iloscSpirytus.textContent = `${spirytusNum}x`
	iloscCisowianka.textContent = `${cisowiankaNum}x`
	countBasket()
}

const showAlert = () => {
	if (addAlert.classList.contains('alert-active')) {
		return
	} else {
		addAlert.classList.add('alert-active')
		setTimeout(() => {
			addAlert.classList.remove('alert-active')
		}, 2500)
	}
}

const sumUp = () => {
	checkBasket()
	checkDelivery()
	checkPayment()
	if (koszyk && dostawa && platnosc) {
		summary.style.display = 'block'
		sumBas.textContent = `${basketSum.toFixed(2)} zł`
		sumDel.textContent = `${parseInt(delivery.value).toFixed(2)} zł`
		sumPay.textContent = `${wybor.value}`
		let finalSum = basketSum + parseInt(delivery.value)
		sumFin.textContent = `${finalSum.toFixed(2)} zł`
		clearBasket()
		delivery.selectedIndex = 0
		wybor.checked = false
		wybor = ''
		platnosc = false
	} else {
		summary.style.display = 'none'
	}
}

const checkBasket = () => {
	if (
		stockNum === 0 &&
		absolutNum === 0 &&
		jackNum === 0 &&
		zoNum === 0 &&
		sopNum === 0 &&
		jimNum === 0 &&
		colaNum === 0 &&
		zubrNum === 0 &&
		warkaNum === 0 &&
		spirytusNum === 0 &&
		cisowiankaNum === 0
	) {
		basketError.style.display = 'block'
		koszyk = false
	} else {
		basketError.style.display = 'none'
		koszyk = true
	}
}

const checkDelivery = () => {
	if (delivery.value === '') {
		deliveryError.style.display = 'block'
		dostawa = false
	} else {
		deliveryError.style.display = 'none'
		dostawa = true
	}
}

const checkPayment = () => {
	for (i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			wybor = radios[i]
		}
	}
	if (wybor === '') {
		paymentError.style.display = 'block'
		platnosc = false
	} else {
		paymentError.style.display = 'none'
		platnosc = true
	}
}

const changedDelivery = () => {
	checkDelivery()
}

const changedPayment = () => {
	checkPayment()
}

const countBasket = () => {
	basketSum =
		stockNum * 31.99 +
		absolutNum * 37.99 +
		jackNum * 69.99 +
		zoNum * 30.99 +
		sopNum * 28.99 +
		jimNum * 54.99 +
		colaNum * 6.99 +
		zubrNum * 2.99 +
		warkaNum * 3.49 +
		spirytusNum * 71.99 +
		cisowiankaNum * 1.99
	basketSumText.textContent = `Razem: ${basketSum.toFixed(2)} zł`
}

const clearBasket = () => {
	stockNum = 0
	absolutNum = 0
	jackNum = 0
	zoNum = 0
	sopNum = 0
	jimNum = 0
	colaNum = 0
	zubrNum = 0
	warkaNum = 0
	spirytusNum = 0
	cisowiankaNum = 0
	checkNum()
	countAlko()
	basketSumText.textContent = ''
}

const handleBasketBtn = () => {
	const scroll = window.scrollY
	const leftToScroll = document.body.getBoundingClientRect().height - window.innerHeight
	const basketBtnWidth = Math.floor((scroll / leftToScroll) * 100)

	root.style.setProperty('--scroll-width', `${basketBtnWidth}%`)

	if (basketBtnWidth > 57) {
		basketBtn.style.opacity = '0'
		basketBtn.style.pointerEvents = 'none'
	} else {
		basketBtn.style.opacity = '1'
		basketBtn.style.pointerEvents = 'all'
	}

	if (basketBtnWidth > 62) {
		scrollToTopBtn.style.opacity = '1'
		scrollToTopBtn.style.pointerEvents = 'all'
	} else {
		scrollToTopBtn.style.opacity = '0'
		scrollToTopBtn.style.pointerEvents = 'none'
	}
}

const checkAgeYes = () => {
	checkAge.style.display = 'none'
	document.body.classList.remove('fixed-body')
}

stockBtn.addEventListener('click', addStock)
absolutBtn.addEventListener('click', addAbsolut)
jackBtn.addEventListener('click', addJack)
zoBtn.addEventListener('click', addZo)
sopBtn.addEventListener('click', addSop)
jimBtn.addEventListener('click', addJim)
colaBtn.addEventListener('click', addCola)
zubrBtn.addEventListener('click', addZubr)
warkaBtn.addEventListener('click', addWarka)
spirytusBtn.addEventListener('click', addSpirytus)
cisowiankaBtn.addEventListener('click', addCisowianka)
sum.addEventListener('click', sumUp)
delivery.addEventListener('change', changedDelivery)
radios.forEach(radio => radio.addEventListener('change', changedPayment))
clearBasketBtn.addEventListener('click', clearBasket)
window.addEventListener('scroll', handleBasketBtn)
ageYes.addEventListener('click', checkAgeYes)
