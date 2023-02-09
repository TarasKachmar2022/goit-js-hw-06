const refs = {
decrementBtnRef: document.querySelector('[data-action="decrement"]'),
valueRef: document.querySelector('#value'),
incrementBtnRef: document.querySelector('[data-action="increment"]')
}

refs.decrementBtnRef.addEventListener("click", onDecrementBtnClick);
refs.incrementBtnRef.addEventListener("click", onIncrementBtnClick);

let counterValue = 0;

function onDecrementBtnClick(){
    counterValue -= 1;
    changeCounterValueUi();
};

function onIncrementBtnClick(){
    counterValue += 1;
    changeCounterValueUi();
};

function changeCounterValueUi(){
   refs.valueRef.textContent = counterValue;
}
