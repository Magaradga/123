window.addEventListener("DOMContentLoaded", () =>{


      
  const second_btn = document.querySelector("#method__second");
  const first_btn = document.querySelector("#method__first");
  const first = document.querySelector('.form__inner--first');
  const second = document.querySelector('.form__inner--second');
  const check__second = document.querySelector('#check__second');
  const check__first = document.querySelector('#check__first');
  console.log(second_btn)
  console.log(first_btn)
  console.log(first)
  console.log(second)
  console.log(check__second)
  console.log(check__first)
  second_btn.addEventListener('click',() =>{
    first.style.display = 'none';
    second.style.display = 'block';
    check__second.className = 'method__item--check--active';
    check__first.className = 'method__item--check';
    });
    first_btn.addEventListener('click',() =>{
      first.style.display = 'block';
      second.style.display = 'none';
      check__second.className = 'method__item--check';
      check__first.className = 'method__item--check--active';
      });

      const quantity__first = document.querySelector("#quantity__first");
      const quantity__second = document.querySelector("#quantity__second");
      const plus__first = document.querySelector("#plus__first");
      const plus__second = document.querySelector("#plus__second");
      const minus__first = document.querySelector("#minus__first");
      const minus__second = document.querySelector("#minus__second");
      result__first = document.querySelector("#prise__first").innerHTML;
      result__second = document.querySelector("#prise__second").innerHTML;
      const prise__first = document.querySelector("#prise__first");
      const prise__second = document.querySelector("#prise__second");
      const result = document.querySelector("#result");
      const total = document.querySelector("#total");
      tax = document.querySelector("#tax").innerHTML;
      shipping = document.querySelector("#shipping").innerHTML;
      const backet = document.querySelector("#backet");
      console.log(quantity__first)
      console.log(quantity__second)
      console.log(plus__first)
      console.log(plus__second)
      console.log(minus__first)
      console.log(minus__second)
      console.log(prise__first)
      console.log(prise__second)
      console.log(result__first)
      console.log(result__second)
      console.log(result)
      console.log(total)
      console.log(tax)
      console.log(shipping)
      console.log(backet)
      plus__first.addEventListener('click',() =>{
        quantity__first.innerHTML++;
        prise__first.innerHTML=quantity__first.innerHTML*result__first;
        result.innerHTML=(+prise__first.innerHTML)+(+prise__second.innerHTML);
        backet.innerHTML=(+quantity__first.innerHTML)+(+quantity__second.innerHTML);
        total.innerHTML=quantity__first.innerHTML*result__first+quantity__second.innerHTML*result__second+(+tax)+(+shipping);
        });
      minus__first.addEventListener('click',() =>{
        quantity__first.innerHTML--;
        if (quantity__first.innerHTML==0){
          good__first.style.display = 'none';
        };
        if (backet.innerHTML==0){
          backet.style.display = 'none';
        };
        prise__first.innerHTML=quantity__first.innerHTML*result__first;
        result.innerHTML=quantity__first.innerHTML*result__first+quantity__second.innerHTML*result__second;
        backet.innerHTML=(+quantity__first.innerHTML)+(+quantity__second.innerHTML);
        total.innerHTML=quantity__first.innerHTML*result__first+quantity__second.innerHTML*result__second+(+tax)+(+shipping);
        });
      plus__second.addEventListener('click',() =>{
        quantity__second.innerHTML++;
        prise__second.innerHTML=quantity__second.innerHTML*result__second;
        result.innerHTML=quantity__first.innerHTML*result__first+quantity__second.innerHTML*result__second;
        backet.innerHTML=(+quantity__first.innerHTML)+(+quantity__second.innerHTML);
        total.innerHTML=quantity__first.innerHTML*result__first+quantity__second.innerHTML*result__second+(+tax)+(+shipping);
        });
      minus__second.addEventListener('click',() =>{
        quantity__second.innerHTML--;
        prise__second.innerHTML=quantity__second.innerHTML*result__second;
        result.innerHTML=quantity__first.innerHTML*result__first+quantity__second.innerHTML*result__second;
        backet.innerHTML=(+quantity__first.innerHTML)+(+quantity__second.innerHTML);
        total.innerHTML=quantity__first.innerHTML*result__first+quantity__second.innerHTML*result__second+(+tax)+(+shipping);
        if (quantity__second.innerHTML==0){
          good__second.style.display = 'none';
        };
        if (backet.innerHTML==0){
          backet.style.display = 'none';
        };
        });
        

        const btn__first = document.querySelector("#close__btn--first");
        const btn__second = document.querySelector("#close__btn--second");
        const good__first = document.querySelector('#good__first');
        const good__second = document.querySelector('#good__second');
        console.log(btn__first)
        console.log(good__first)
        console.log(btn__second)
        console.log(good__second)
        btn__first.addEventListener('click',() =>{

          good__first.style.display = 'none';
          result__first=0;
          quantity__first.innerHTML=0;
          result.innerHTML=quantity__first.innerHTML*result__first+quantity__second.innerHTML*result__second;
          backet.innerHTML=(+quantity__first.innerHTML)+(+quantity__second.innerHTML);
          total.innerHTML=quantity__first.innerHTML*result__first+quantity__second.innerHTML*result__second+(+tax)+(+shipping);
          if (backet.innerHTML==0){
            backet.style.display = 'none';
          };
          });
          btn__second.addEventListener('click',() =>{
            good__second.style.display = 'none';
            result__second=0;
            quantity__second.innerHTML=0;
            result.innerHTML=quantity__first.innerHTML*result__first+quantity__second.innerHTML*result__second;
            backet.innerHTML=(+quantity__first.innerHTML)+(+quantity__second.innerHTML);
            total.innerHTML=quantity__first.innerHTML*result__first+quantity__second.innerHTML*result__second+(+tax)+(+shipping);
            if (backet.innerHTML==0){
              backet.style.display = 'none';
            };
            });
    









  });