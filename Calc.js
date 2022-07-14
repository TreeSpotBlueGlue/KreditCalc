let SummKred = 120000;
let GodProcStavka = 14;
let Srok = 16;

let MesProcStavka = (GodProcStavka / 12) / 100;

let MesPl = SummKred * MesProcStavka * Math.pow(1 + MesProcStavka, Srok) / (Math.pow(1 + MesProcStavka, Srok) - 1);

let Stat = {
  OsnDolg: 0,
  DolgPoPr: 0,
  OstOsnDolg: SummKred
};

console.log('Сумма кредита: ' + SummKred + ' руб.');
console.log('Ставка: ' + GodProcStavka + '%');
console.log('Срок: ' + Srok + ' месяцев');
console.log('Месяц | Ежемесячный платеж | Основной долг | Долг по процентам | Остаток основного долга')

for (let i = 1; i < Srok + 1; i++) {
	
	let StatUst = {};


	for (let key in Stat) {
		StatUst[key] = Stat[key];
	}
	
	
	Stat['OstOsnDolg'] = StatUst['OstOsnDolg'] * (1 + MesProcStavka) - MesPl;
	
	Stat['DolgPoPr'] = StatUst['OstOsnDolg'] * (1 + MesProcStavka) - StatUst['OstOsnDolg'];
	
	Stat['OsnDolg'] = MesPl - Stat['DolgPoPr'];

	if (Stat['OstOsnDolg'] < 0) {
		Stat['OstOsnDolg'] = 0;
	}
	
	
	console.log(i + ' | ' + Math.floor(MesPl * 100) / 100 + ' | ' + Math.floor(Stat['OsnDolg'] * 100) / 100 + ' | ' +
							Math.floor(Stat['DolgPoPr'] * 100) / 100 + ' | ' + Math.floor(Stat['OstOsnDolg'] * 100) / 100)
};
