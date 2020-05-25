		var input = document.querySelector('.pswrd');
		var show = document.querySelector('.show');
		show.addEventListener('click', active);
		function active(){
          debugger
			if(input.type === "password"){
                show.innerHTML ='<i class="fas fa-eye-slash"></i>';
                input.type ='text';
				//show.innerHTML ='<i class="fas fa-eye"></i>';
			}else{
				input.type = "password";
				show.innerHTML ='<i class="fas fa-eye"></i>'
			}
		}
						