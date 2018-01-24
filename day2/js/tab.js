
class Tab{
	constructor(){
		this.init();
	}
	init(){
		this.createWrap();
		this.addEvent();
	}
	addEvent(){
		let btns = document.querySelectorAll("button");
		let divs = document.querySelector(".con").querySelectorAll("div");
		let text = this.createContent();
		console.log(text)
		for(var i=0;i<btns.length;i++){
		
			btns[i].addEventListener("click",function(){
				
				var txt = this.innerHTML;
				console.log(txt);	
				text.innerHTML = txt;

			})
		}

	}
	createContent(){
		let con = document.createElement("div");
		con.className = "con";
		return con;
	}
	createBtn(tit1,tit2,tit3){
		let btn = document.createElement("p");
		let btn1 = document.createElement("button");
		let btn2 = document.createElement("button");
		let btn3 = document.createElement("button");
		btn.className = "btn";
		btn1.className = "btn1";
		btn2.className = "btn1";
		btn3.className = "btn1";
		btn1.innerHTML = tit1;
		btn2.innerHTML = tit2;
		btn3.innerHTML = tit3;

		btn.append(btn1);
		btn.append(btn2);
		btn.append(btn3);
		return btn;
	}
	createWrap(){
		let box = document.createElement("div");
		let tit = this.createBtn("新闻","图片","视频");
		let text = this.createContent();

		
		box.className = "box";
		box.append(tit);
		box.append(text);
		document.body.append(box);

	}

}
let tab = new Tab();