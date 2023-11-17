"use strict";(self["webpackChunkDOUJI_AI"]=self["webpackChunkDOUJI_AI"]||[]).push([[616],{42616:function(t,e,s){s.r(e),s.d(e,{default:function(){return p}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"balance"},[e("div",{staticClass:"text-big text-color"},[t._v("Balances")]),e("div",{staticClass:"balance-address-container"},[e("img",{staticStyle:{width:"16px",height:"16px"},attrs:{src:s(873)}}),e("div",{staticClass:"balance-address"},[t._v(t._s(t._f("omitAddress")(t.$store.state.user.account)))]),e("img",{staticStyle:{width:"14px",height:"14px"},attrs:{src:s(90351)}})])]),e("div",{staticClass:"balance-value"},[e("div",{staticClass:"item"},[e("div",{staticClass:"value text-color"},[t._v(t._s(t._f("decimalPlace4")(t.$store.state.chain.balanceMbd)))]),e("div",{staticClass:"sub-value text-sub-color"},[t._v("≈$"+t._s(t.$store.state.chain.balanceMbd*t.$store.state.chain.mbdPrice||"0.0000"))]),e("div",{staticClass:"unit text-color"},[t._v("MBD")])]),t._m(0),e("div",{staticClass:"item"},[e("div",{staticClass:"value text-color"},[t._v(t._s(t.bjxBalance))]),e("div",{staticClass:"sub-value text-color"},[t._v(" ")]),e("div",{staticClass:"unit text-color"},[t._v("BJX NFT")])]),t._m(1)]),e("div",{staticClass:"divider"}),t._e(),e("div",{staticClass:"divider"}),e("div",{staticClass:"text-middle text-color"},[t._v("NFT Stake income settlement")]),e("div",{staticClass:"settle-button"},[e("el-button",{staticClass:"common-btn1",attrs:{type:"primary"},on:{click:function(e){return t.$refs["incomeDialog"].showDialog()}}},[t._v("Go Settlement")])],1),e("div",{staticClass:"divider"}),e("div",{staticClass:"text-middle text-color"},[t._v("Platform rewards to be settled")]),t._m(3),e("div",{staticClass:"settle-button"},[e("el-button",{staticClass:"common-btn1",attrs:{type:"primary"}},[t._v("Settlement")])],1),t._m(4),e("income-dialog",{ref:"incomeDialog"})],2)},l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"item"},[e("div",{staticClass:"value text-color"},[t._v("0.0000")]),e("div",{staticClass:"sub-value text-sub-color"},[t._v("≈$0.00")]),e("div",{staticClass:"unit text-color"},[t._v("MS")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"item"},[e("div",{staticClass:"value text-color"},[t._v("0")]),e("div",{staticClass:"sub-value text-color"},[t._v(" ")]),e("div",{staticClass:"unit text-color"},[t._v("DJPlanate")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"settle-container"},[e("div",{staticClass:"unit text-color"},[t._v("MBD")]),e("div",{staticClass:"value text-color"},[t._v("0.0000")]),e("div",{staticClass:"sub-value text-sub-color"},[t._v("≈$0.0000")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"settle-containers"},[e("div",{staticClass:"settle-container"},[e("div",{staticClass:"unit text-color"},[t._v("MBD")]),e("div",{staticClass:"value text-color"},[t._v("0.0000")]),e("div",{staticClass:"sub-value text-sub-color"},[t._v("≈$0.00")])]),e("div",{staticClass:"settle-container",staticStyle:{"margin-left":"32px"}},[e("div",{staticClass:"unit text-color"},[t._v("BJXStar NFT")]),e("div",{staticClass:"value text-color"},[t._v("0")]),e("div",{staticClass:"sub-value text-sub-color"},[t._v("≈$0.00")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-color settle-label"},[t._v(" Settlement Fee: 5000 MBD Number of fee-free times: "),e("span",{staticStyle:{color:"#47D1AF"}},[t._v("3")])])}],i=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{"custom-class":"income-dialog",visible:t.show,width:"1100px"},on:{open:function(e){return t.onOpen()},"update:visible":function(e){t.show=e}}},[e("div",{staticClass:"income-header text-color",attrs:{slot:"title"},slot:"title"},[t._v("Set NFT DAO Governance")]),e("div",{staticClass:"income-content"},[e("el-table",{ref:"multipleTable",staticStyle:{width:"1000px"},attrs:{data:t.tableData},on:{"selection-change":t.handleSelectionChange}},[e("el-table-column",{attrs:{type:"selection",width:"47px"}}),e("el-table-column",{attrs:{label:"Token ID",width:"119px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("ID")]}}])}),e("el-table-column",{attrs:{prop:"name",label:"NFT name",width:"211px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("name")]}}])}),e("el-table-column",{attrs:{prop:"address",label:"Bonus Dividend Pool BalancelMBD)",width:"249px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("BalancelMBD")]}}])}),e("el-table-column",{attrs:{prop:"address",label:"Your NFTs / Members NFTs",width:"209px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("NFTs")]}}])}),e("el-table-column",{attrs:{prop:"address",label:"Stake NFT Income(MBD)",width:"165px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("Income(MBD)")]}}])})],1),e("el-pagination",{staticStyle:{width:"100%",margin:"20px 0"},attrs:{background:"",layout:"pager,next","next-text":"下一页","page-count":t.pageCount,"page-size":20}})],1),e("div",{staticClass:"income-btn"},[e("el-button",{staticClass:"common-btn2"},[t._v("Settlement")])],1)])},o=[],c=s(96347),n={name:"income-dialog",data(){return{show:!1,pageNo:1,pageSize:20,pageCount:0,tableData:[]}},methods:{showDialog(){this.show=!0},handleSelectionChange(){},onOpen(){this.pageNo=1,this.pageLoad()},pageLoad(){var t=this.$loading({background:"rgba(0, 0, 0, 0.8)"});(0,c.cz)(this.pageNo).then((t=>{console.log(t),1==t.code?(this.tableData=t.data.list,this.pageCount=t.data.pageCount):this.$toast.error(t.message)})).catch((t=>{this.$toast.error(t)})).finally((()=>{t.close()}))}}},r=n,d=s(1001),u=(0,d.Z)(r,i,o,!1,null,null,null),v=u.exports,C=s(12662),b={name:"balance-view",components:{IncomeDialog:v},data(){return{userAccount:this.$store.state.user.account,bjxBalance:0}},mounted(){this.getBjxBalance()},methods:{async getBjxBalance(){this.bjxBalance=await(0,C.yM)(this.userAccount)}}},m=b,A=(0,d.Z)(m,a,l,!1,null,"28dd2d3c",null),p=A.exports},873:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABURJREFUWEfFV2tsFFUU/s5saQv+oiwmPoIRTMRYSjAChohFfoINKZ2xEEQ0oig7Wx4COwWVFaWdLUgxnW1JFYPGCGRmCyEgf5RAogYTULRGQ0RCYtQ0gISE2O3SnWPuzGzZx2x3MTHcX5O5557z3fP4zrmE21iKuuNBwJ7PbNcR0SQGjweICbjKTJeI+LuKQPrL/e9vGShXLZUSVKLRSr5a/SIYKwE8XkoeAAM4BXB3bXAoEY1G7dHOjApACbU3MqEToAeylAwCfAYknYeN6yCWAK4B6BEAMwCMycgS6CfY/JrZrX1VDIQvgIZXouOqKqu6AVrhHWQQjrBt90oTU1+Y0WjKT6E4V11Z1QDQagaeypxlcJs0MGWraT6bzj9XAEBZt6sGN1PHGHjCEWZ8k5aw+lCX9kMZ7h8RWdwSe1qyuRvAVO9nHwWTS/PB5wBwb159AsBs1zZvL4a8HDDKul1j+WZqD4DnhTwBCQxMbs72RA4AOdT+KYiWOcKM1WZc6ylmqCncPkMCpjOoCszna1I1X/f2rrpZKM8kq7EOABvcPX7bMlqjt/LE+5JD+hIQ9jsihG2JLm2rn3E53DEXSBtgqsvbHyDQFtOI7C0C4hMAzwGwme05ifjmbz2vAJ6rfgNwD8CnaoND8/3Kx60KOpiV6RcBJAE8DCDgGd5pGdrGfBDLN+y4azCZPgfgIQBnLCMyy+MQQFH1NQzsBpAO2DTtYHfkl3wFS9TYvcPgXwGMA/A9pwMvJHo2/ijkGl/dcXegwt4N8FL3VrTINCJH8nUoYX0hM456/xdYhnbcyQFZ1YXBqQx8ljA0JwfylxyK7QTx6wD+oDGVdWbn+r9zZZgUteMogxe4N9Rm+upRdeH6WQAftYzWBmoM69MDDOEaEEnzzK5Np/wOKmqsn8G1BLSahqb7yTSF2mYTSafFXprt4KH45qsFXlBjLzH4QwDDlEKQ5FBsLYg7AVyrDSaDxahTVnVx4/FgqcGKb8q4MUe/F+cbXnLVmYbWXxiGtonMkugVRIRnSFbb97mM57rE72ZemH4HcD+BVvpnOtAc7piSZvuCkLfTPKWvp1UkaWE4vZAD9JYAcBKgejC9Z8UjXq0WHmpSYwcI3EzAadOIzHGYIm/J4ZgO5giAvywjcp+fjHOZsH4YjEUM7CVF1c8xMJ1Ab5hGZHsxDyjhjnpm+6TYZ0KPNCG5NptWlVBsORPvAyCB8KbVpb1b3JsZr6OvbAAecgOMkAOCcYkkHGOb/iHiejezHbo9fYPGzTve1TJUFoByQ+Aqc2hV3NLhdp/VTynMNXu168WMZ4cAjI/KTsJ50WjFhMtj24h4fRbrFdgh4PAw2yv9SjAjnOEdNwnLKEMxFeFytcWETJVcBGifGMFsxjAxPULEzSMtHLhQAao/YET+LFmG5RBRk6rvJmCNF4Z3rgSHtp2MRod9qmAZmD8AMFbkAgYmP5k/hCj5ROTVeFEqbmzZXhuwA4LzqVR2C11NobYFRJIgKgLzy1a8VbDeyJLzqVjsjNaM5JC+B4RVAH6uDSanlRoyvQt97CVqv2VoI207uxkx2wsT8c2fO81otHYsq7rgdjEhtViG1jVadmf2lHBsFjOLpmNfCSarRLhy2jHjrBWPzBxpx64X2psZdMAttlsDyeJQx2MS2fNpTGXc7Fw/WA4ANxSxFRLhmtuWnfItPpCMlMdtjGTlAvGMlx7JhMI7PpR6+XDnxvKMW+/owyQ7tt4QKmbFSVn///+nWQ6I//g4JaL4oxMG+0rxRsnXcQ6YEs9zluyzlZJ94nae5/8COITpSuyYVEAAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=616.ddee2496.js.map