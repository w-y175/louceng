import {
  getCarlist,
  getCarIndexlist,
  getInquiryDetailList
} from '@/services/index';

const state = {
  // 首页车系数据
  carList: [],
  // 首页对应车系数据
  carIndexList: [],
  // 询底价
  inquiryDetailList:{},
  tag: false,
  titleEle: '北京'
}

const mutations = {
  // 首页车系
  setCarlist(pay, load) {
    pay.carList.push(load);
  },
  // 车款数据
  setCarIndexList(pay, load) {
    pay.carIndexList = load;
  },
  // 询问底价
  setInquiryDetailList(pay, load){
    pay.inquiryDetailList = load;
  },
  // 切换城市
  getTitle(pay,load){
      pay.titleEle=load;
  },
  // 展示隐藏
  getTag(pay,load){
    pay.tag=load;
  }
}

const actions = {
  async getCarlist({
    commit
  }) {
    let res = await getCarlist();
    if (res.code == 1) {
      res.data.map(item => {
        let letter = item.Spelling[0];
        let newArr = res.data.filter(
          item => item.Spelling[0] == letter
        );
        if (this.state.Home.carList.findIndex(item => item.letter == letter) == -1) {
          commit('setCarlist', {
            letter,
            children: newArr
          });
        }
      });
    } else {
      alert(res.msg);
    }
  },

  async getCarIndexlist({
    commit
  }, payload) {
    let res = await getCarIndexlist(payload);
    commit('setCarIndexList', res.data);
  },

  async getInquiryDetailList({
    commit
  }, payload) {
    let res = await getInquiryDetailList(payload);
    commit('setInquiryDetailList', res.data);
  },
  
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}