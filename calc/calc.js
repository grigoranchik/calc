angular.module("myApp",[]).controller("firstCtrl", function($scope){
	$scope.tempInput="";
	$scope.Calk_memory_1;
	$scope.Calk_memory_2;
	$scope.Znak_memory;
	
	$scope.daivalue=function(myIntValue){		
		this.pastElement(this.getElement() + myIntValue.toString());
			this.Calk_memory_2=this.getElement();
	};
	
	$scope.equals=function(){
		if (this.Znak_memory=='+'){
				this.pastElement(parseFloat(this.Calk_memory_1) + parseFloat(this.Calk_memory_2) +"");  //вводим в экран значение вычислений
				this.Calk_memory_1=parseFloat(this.Calk_memory_1) + parseFloat(this.Calk_memory_2) +""; //сохраняем результат вычислений..
			}
			else
				if(this.Znak_memory=='-'){
					this.pastElement(parseFloat(this.Calk_memory_1) - parseFloat(this.Calk_memory_2) +"");
					this.Calk_memory_1=parseFloat(this.Calk_memory_1) - parseFloat(this.Calk_memory_2) +"";
				}
				else
					if(this.Znak_memory=='/'){
					this.pastElement(parseFloat(this.Calk_memory_1) / parseFloat(this.Calk_memory_2) +"");
					this.Calk_memory_1=parseFloat(this.Calk_memory_1) / parseFloat(this.Calk_memory_2) +"";
					}
					else
						if(this.Znak_memory=='*'){
						this.pastElement(parseFloat(this.Calk_memory_1) * parseFloat(this.Calk_memory_2) +"");
						this.Calk_memory_1=parseFloat(this.Calk_memory_1) * parseFloat(this.Calk_memory_2) +"";
				};	
		
		
	};
	
	$scope.getElement=function(){         // узнать/запомнить/возвратить значение записанного поля		
		return $scope.tempInput;
	};	
	$scope.pastElement=function(pastElem){//вставить значение в поле
		$scope.tempInput=pastElem;
	};	
	$scope.delElement=function(){         // очистить поле
		$scope.tempInput="";
	};	
	
	$scope.add=function(){
			this.Calk_memory_1=this.getElement();		
			this.delElement();
			this.Znak_memory='+';
	};	
	$scope.subtraction=function(){
			this.Calk_memory_1=this.getElement();		
			this.delElement();
			this.Znak_memory='-';
	};
	$scope.division=function(){
			this.Calk_memory_1=this.getElement();		
			this.delElement();
			this.Znak_memory='/';
	};
	$scope.multiplication=function(){
			this.Calk_memory_1=this.getElement();		
			this.delElement();
			this.Znak_memory='*';
	};
	$scope.zeroing=function(){
			this.delElement();
			this.Calk_memory_1='';
			this.Znak_memory='';
	};

	function fuckMe(){
		alert('I was fucked..');
	}
	
});


		
		
		
		
		