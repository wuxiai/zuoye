
class Dialog{
	constructor(title = "天气",content = "蓝色大风预警"){
		
		this.title = title;
		this.content = content;
		this.init();
	}
	init(){
		this.createWrap();
	}
	createTitle(){
		let oTit = document.createElement("p");
		let close = document.createElement("span");
		
		oTit.className = "dialog-title";
		close.className = "close iconfont";
		oTit.innerHTML = this.title;
		close.innerHTML = "&#xe72a;"
		oTit.append(close);
		return oTit;
	}
	addEvent(){
		let close = document.querySelector('.close');
		let success = document.querySelector('.success');

		close.addEventListener("click", (event) =>{
			this.hide();
		})
		success.addEventListener("click", (event) =>{
			this.hide();
		})
	}
	show(){

	}
	hide(){
		let oDiv = document.querySelector('.mark');
		oDiv.style.display = "none"
	}
	createButton(txt,cls){
		let btn = document.createElement("button");		
		btn.innerHTML = txt;
		btn.className = cls;
		return btn;
	}
	createButton2(txt2,cls2){
		let btn2 = document.createElement("button");		
		btn2.innerHTML = txt2;
		btn2.className = cls2;
		return btn2;
	}
	createContent(){
		let text = document.createElement("div");
		let btn = this.createButton("确定","success");
		let btn2 = this.createButton("取消","cancel");
		text.className = "text";
		text.innerHTML = this.content;
		text.append(btn);
		text.append(btn2);
		return text;
	}
	createWrap(){
		let mark = document.createElement('div');
		let oDiv = document.createElement('div');
		let oTit = this.createTitle();
		let text = this.createContent();
		oDiv.className = "dialog";
		mark.className = "mark";
		mark.append(oDiv);
		oDiv.append(oTit);
		oDiv.append(text);
		document.body.append(mark);
		this.addEvent();
	}
}
let dialog = new Dialog();