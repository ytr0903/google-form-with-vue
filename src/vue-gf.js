Vue.use(VeeValidate, {
  locale: 'ja',
  events: 'input|blur|focus'
});

Vue.component('gf_box', {
  props: ['item','index'],
  inject: ['$validator'], //Validetaionを共有
  data: function () {
    if(this.item.questiontype == 'checkbox'){
      this.item.initialvalue = (this.item.options.length > 1) ? [] : false
    }
    return {
      PulldownInitialMessage: '選択してください',
      inputvalue: this.item.initialvalue ? this.item.initialvalue : null,
      inputfreeanswer: '',
      inputfreeanswer_boolean: false
    }
  },
  computed: {
    submitvalue: function() {
      if(this.item.questiontype === 'checkbox' && this.item.options.length > 1) {
        var newinputvalue = this.inputvalue.concat()
        .join(',') // 自由記述回答を追加してカンマ区切りに整形
        .replace('__other_option__',this.inputfreeanswer); // 自由回答の文字列を置換
        return newinputvalue
      } else {
        return this.inputvalue
      }
    },
    options_with_freeanswer: function() {
      if(this.item.freeanswer && this.item.questiontype === 'checkbox') {
        return this.item.options.concat(['__other_option__'])
      } else {
        return this.item.options
      }
    }
  },
  methods: {
    check: function(id){
      var target = document.getElementById(id);
      if(!target.checked) target.click() // IDのclick
    },
    focus: function(text, checkbox) {
      if(checkbox && document.getElementById(checkbox).checked) {
        document.getElementById(text).focus()
      } else {
        document.getElementById(text).focus()
      }
    } 
  },
  template: /*html*/`
  <div class="form-group" :class="{'has-error': errors.has(item.label ? item.label : 'q'+index) || errors.has('q'+index+'_freeanswer')}">
    <label class="form-label" :for="item.label ? item.label : 'q'+index" v-html="item.question"></label>
    <template v-if="item.questiontype === 'text'">
      <input
      class="form-input"
      :type="item.questiontype"
      :name="item.label ? item.label : 'q'+index" :data-vv-as="item.question"
      v-model="inputvalue"
      v-validate="item.validate === true ? 'required' : item.validate"
      :placeholder="item.placeholder ? item.placeholder : ''">
    </template>
    <template v-else-if="item.questiontype === 'textarea'">
      <textarea
      class="form-input"
      :name="'q'+index" :data-vv-as="item.question"
      v-model="inputvalue"
      v-validate="item.validate === true ? 'required' : item.validate"
      :placeholder="item.placeholder ? item.placeholder : ''">
      </textarea>
    </template>
    <template v-else-if="item.questiontype === 'radio'">
      <div class="input-group" v-for="option in item.options">
        <label class="form-radio">
          <input
          type="radio"
          :name="'q'+index" :data-vv-as="item.question"
          :value="option"
          v-model="inputvalue"
          v-validate="item.validate === true ? 'required' : item.validate">
          <i class="form-icon"></i>
          <span>{{option}}</span>
        </label>
      </div>
      <div class="input-group" v-if="item.freeanswer" @click="focus('q'+index+'_freeanswer')">
        <label class="form-radio">
          <input
          type="radio"
          :name="'q'+index" :data-vv-as="item.question"
          :value="inputfreeanswer"
          v-model="inputvalue"
          v-validate="item.validate === true ? 'required' : item.validate">
          <i class="form-icon"></i>
          <span>
            {{item.freeanswer}}
          </span>
        </label>
        <input type="text" :id="'q'+index+'_freeanswer'" class="form-input" v-model="inputfreeanswer" @click="inputvalue = inputfreeanswer" @input="inputvalue = inputfreeanswer">
      </div>
    </template>
    <template v-else-if="item.questiontype === 'checkbox'">
      <div class="input-group" v-for="(option, ansnum) in options_with_freeanswer">
        <label :class="item.options.length == 1 ? 'form-switch' : 'form-checkbox'">
          <input
          type="checkbox" :id="'q'+index+'_a'+ansnum"
          :name="'q'+index" :data-vv-as="item.question"
          :value="option"
          v-model="inputvalue"
          v-validate="item.validate === true ? 'required' : item.validate"
          @click="if(option === '__other_option__') focus('q'+index+'_freeanswer', 'q'+index+'_a'+ansnum)">
          <i class="form-icon"></i>
          <span>{{option !== '__other_option__' ? option : item.freeanswer}}</span>
        </label>
        <input
        v-if="option === '__other_option__'"
        type="text" class="form-input"
        :id="'q'+index+'_freeanswer'" :name="'q'+index+'_freeanswer'" :data-vv-as="item.question"
        v-model="inputfreeanswer"
        v-validate="inputvalue.includes(option) ? 'required' : false" @input="check('q'+index+'_a'+ansnum)">
      </div>
    </template>
    <template v-else-if="item.questiontype === 'pulldown'">
      <select class="form-select" v-model="inputvalue" :name="item.label ? item.label : 'q'+index" :data-vv-as="item.question" v-validate="item.validate === true ? 'required' : item.validate">
        <option disabled value="">{{PulldownInitialMessage}}</option>
        <option v-for="(option, index) in item.options" :value="option">{{option}}</option>
      </select>
    </template>

    <input type="hidden" :name="'entry.'+item.name" :value="submitvalue">
    <p v-if="errors.has(item.label ? item.label : 'q'+index)" class="form-input-hint">
      {{ errors.first(item.label ? item.label : 'q'+index) }}
    </p>
    <p v-else-if="errors.has('q'+index+'_freeanswer')" class="form-input-hint">
      {{ errors.first('q'+index+'_freeanswer') }}
    </p>
  </div>`
});

var app = new Vue({
  el: '#app',
  data: {
    gf_data,
    submitted: false
  },
  methods: {
    gf_submit: function() {
      this.$validator.validate().then(result => {
        if (!result) {
          return false
        }
        document.gf_form.submit();
      });
    }
  },
  mounted: function() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute('name','hidden_iframe');
    iframe.setAttribute('style','display: none');
    document.body.appendChild(iframe);
  }
});