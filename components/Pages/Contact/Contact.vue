<script setup>

  import { ref } from 'vue';

  const firstName = ref('');
  const lastName = ref('');
  const email = ref('');
  const interests = ref([]);

  // Переменные состояния ошибок
  const firstNameError = ref(null);
  const lastNameError = ref(null);
  const emailError = ref(null);

  const toSubmitMessage = () => {
    // Сброс ошибок перед каждой отправкой
    firstNameError.value = null;
    lastNameError.value = null;
    emailError.value = null;

    // Проверка заполненности полей и вывод ошибок
    if (!firstName.value.trim()) {
      firstNameError.value = 'First Name is required';
    }

    if (!lastName.value.trim()) {
      lastNameError.value = 'Last Name is required';
    }

    if (!email.value.trim()) {
      emailError.value = 'Email is required';
    }

    // Дополнительная логика обработки формы, если все поля заполнены
    if (firstNameError.value || lastNameError.value || emailError.value) {
      console.log('Form has errors');
      return; // Если есть ошибки, прекратить выполнение
    }

    // Ваша логика обработки формы здесь
    console.log('Form submitted:', {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      interests: interests.value,
      // Добавьте другие поля формы, если необходимо
    });

    // Здесь вы можете добавить логику AJAX-запроса для отправки данных на сервер
  };

</script>

<template>
  <div class="pageContainer">

    <div class="chatHeader">
      Let's chat
    </div>

    <div class="chatContainer">
      <div class="contactInfo">
        <div class="contactHeader">
          The Coffee Movement
        </div>

        <div class="contactTown">
          Chinatown / Nob Hill
        </div>
        <div class="contactStreet">
          1030 Washington Street
        </div>
        <div class="contactIndex">
          San Francisco, CA 94109
        </div>

        <div class="contactTown">
          Inner Richmond
        </div>
        <div class="contactStreet">
          1737 Balboa Street
        </div>
        <div class="contactIndex">
          San Francisco, CA 94121
        </div>

        <div class="contactTel">
          (415) 237-3375
        </div>
        <div class="contactMail">
          aloha@thecoffeemovement.com
        </div>
      </div>

      <div class="formContainer">
        <form action="" method="post">
          <div class="namesHeader">
            Name
            <div class="quoterHolder">
              (required)
            </div>
          </div>

          <div class="namesContainer">
            <div class="namesContainerInput">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required class="firstNameBox">
            </div>

            <div class="namesContainerInput rightBox">
              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required class="lastNameBox"> 
            </div>
          </div>

          <div class="mailBoxContainer">
            <div class="mailHeader">
              Email
              <div class="quoterHolder">
                (required)
              </div>
            </div>
            <input type="email" id="email" name="email" required class="mailBox">
          </div>
        
          <div class="checkListHeader">
            I'm interested in...
          </div>

          <div class="checkList">
            <div class="checkContainer">
              <input type="checkbox" id="espresso" name="interest" value="espresso" class="checkBox">
              <div class="checkContainerLabel">
                <label for="espresso">Espresso Pop-Up</label>
              </div>
            </div>
            
            <div class="checkContainer">
              <input type="checkbox" id="office" name="interest" value="office" class="checkBox">
              <div class="checkContainerLabel">
                <label for="office">Office Coffee Program</label>
              </div>
            </div>

            <div class="checkContainer">
              <input type="checkbox" id="consulting" name="interest" value="consulting" class="checkBox">
              <div class="checkContainerLabel">
                <label for="consulting">Consulting</label>   
              </div>           
            </div>

            <div class="checkContainer">
              <input type="checkbox" id="other" name="interest" value="other" class="checkBox">
              <div class="checkContainerLabel">
                <label for="other">Other</label>
              </div>
            </div>
          </div>

          <div class="messageBoxContainer">
            <div class="messageHeader">
              Message
              <div class="quoterHolder">
                (required)
              </div>
            </div>
            <textarea id="message" name="message" required class="messageBox"></textarea>
          </div>

          <div>
            <button @click="toSubmitMessage" class="btnSubmit">Submit</button>
          </div>
        </form>

      </div>
    </div>

  </div>
</template>

<style scoped>

  .pageContainer {
    margin-bottom: 100px;
  }

  .chatHeader {
    display: fixed;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 120px;
    font-size: 60px;
    text-shadow: 0.2px 0.2px 0.2px #000;

  }

  .chatContainer {
    display: flex;
    align-items: flex-start;
    height: 100vh;
  }

  .contactInfo {
    display: flex;
    width: 50%;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-end;
    padding-right: 40px;
    margin-left: -100px;
  }

  .contactHeader {
    font-size: 31px;
    margin-bottom: 30px;
    text-shadow: 0.2px 0.2px 0.2px #000;
  }

  .contactTown {
    font-size: 14px;
    font-weight: 900;
  }

  .contactStreet,
  .contactTel,
  .contactMail {
    font-size: 14px;
  }

  .contactIndex {
    font-size: 14px;
    margin-bottom: 20px;
  }

  .formContainer {
    width: 50%;
    font-size: 16px;
    font-family: '';
    box-sizing: border-box;
  }

  .namesHeader {
    display: flex;
    margin-bottom: 15px;
  }

  .quoterHolder {
    margin-left: 8px;
    opacity: 0.6;
  }

  .namesContainer {
    display: flex;
    justify-content: space-between;
  }

  .namesContainerInput {
    width: 100%;
  }

  .rightBox {
    margin-left: -112px;
  }

  .firstNameBox,
  .lastNameBox {
    padding: 13px 41px;
    border: solid 1px #a9a9a9;  
  }

  .firstNameBox,
  .lastNameBox:hover {
    opacity: 0.7;
  }

  .mailHeader {
    display: flex;
    margin-bottom: 5px;
    margin-top: 25px;
  }

  .mailBox {
    padding: 13px 171px;
    border: solid 1px #a9a9a9;
  }

  .mailBox:hover {
    opacity: 0.7;
  }

  .messageHeader {
    display: flex;
    margin-bottom: 5px;
  }

  .messageBox {
    padding: 33px 171px;
    border: solid 1px #a9a9a9;
  }

  .messageBox:hover {
    opacity: 0.7;
  }

  .checkListHeader {
    margin-top: 25px;
    margin-bottom: 10px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  .checkBox {
    margin-right: 12px;
    margin-left: 0;
    width: 16px;
    height: 16px;
    cursor: pointer;
    border: 1px solid #a9a9a9;
    appearance: none;
    background-color: white;
  }
 
  .checkBox:hover {
    opacity: 0.7;
  }

  .checkBox::before {
    content: '\2714';
    font-size: 14px;
    color: transparent;
    position: absolute;
    transform: translate(18%, -16%);
  }

  .checkBox:checked {
    background-color: #000;
  }

  .checkBox:checked::before {
    color: #fff;
  }  

  .checkList {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .checkContainer {
    display: flex;
    align-items: center;
    margin-bottom: 20px; 
  }

  .checkContainerLabel {
    margin-bottom: -5px;
  }

  .checkList
  label {
    cursor: pointer;
  }

  .btnSubmit {
  background-color: #000;
  padding: 20px 33px;
  cursor: pointer;
  color: #fff;
  border-radius: 38px;
  border: none;
  font-size: 16px;
  text-shadow: 0.3px 0.3px 0.3px #fff;
  position: absolute;
  left: 45%;
  transform: translateY(18px);
  }

  .btnSubmit:hover {
    opacity: 0.7;
  }

</style>