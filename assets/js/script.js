function Calculadora(){
    this.display = document.querySelector('.display')
    this.start = () => this.clickButtons() //começa 'ligando' o método q identifica os cliques nos botões
    this.clearDisplay = () => this.display.value = '' //apagando oq tem no display
    this.calc = () => {
        try{
            if(!this.display.value) {
                alert('ERRO')
                this.display.value = ''
                return
            }
            this.display.value = eval(this.display.value)
        }catch(e){
            alert('ERRO')
            this.display.value = ''
            return
        }
    }
    this.deleteLast = () =>  this.display.value = this.display.value.slice(0, -1) //slice 0 -1 pega só o último dígito
    this.clickButtons = () => {
        document.addEventListener('click', (e) => {
            const el = e.target

            if(el.classList.contains('btn-num')){
                this.btnToDisplay(el.innerText)
            }
            if(el.classList.contains('btn-op')){
                this.btnToDisplay(el.innerText)
            }
            if(el.classList.contains('btn-clear')){
                this.clearDisplay()
            }
            if(el.classList.contains('btn-del')){
                this.deleteLast()
            }
            if(el.classList.contains('btn-eq')){
                this.calc()
            }
            })
        }
        this.btnToDisplay = btnClicked => this.display.value += btnClicked  
}

const calculadora = new Calculadora()
calculadora.start()