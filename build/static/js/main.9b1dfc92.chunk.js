(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){},17:function(e,t,n){e.exports=n(42)},42:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),i=n.n(r),l=n(12),u=n(13),s=n(15),c=n(14),m=n(16),h=function(e){var t=e.key,n=e.name,a=e.number;return o.a.createElement("p",{key:t},n," ",a)},d=n(2),f=n.n(d),p="http://localhost:3001/api/persons",v={getAll:function(){return f.a.get(p)},create:function(e){return f.a.post(p,e)},remove:function(e){var t=p+"/"+e;return console.log(t),f.a.delete(t).then(function(e){return e.data})}},b=function(e){var t=e.ilmoitus;return o.a.createElement("h3",{className:"notification"},t)},g=(n(10),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).handleNameChange=function(e){console.log(e.target.value),n.setState({newName:e.target.value})},n.handleNumberChange=function(e){console.log(e.target.value),n.setState({newNumber:e.target.value})},n.deletePerson=function(e){console.log(e),v.remove(e).then(function(t){n.setState({persons:n.state.persons.filter(function(t){return t.id!==e}),ilmoitus:"Poistettiin henkil\xf6 jonka id '".concat(e,"'")}),setTimeout(function(){n.setState({ilmoitus:null})},5e3)})},n.addPerson=function(e){e.preventDefault();var t=n.state.newName;n.state.newNumber;if(!1===n.state.persons.map(function(e){return e.name}).includes(t)){console.log("meni l\xe4pi");var a={name:n.state.newName,number:n.state.newNumber};v.create(a).then(function(e){n.setState({persons:n.state.persons.concat(e.data),newNote:"",ilmoitus:"Lis\xe4ttiin henkil\xf6 ".concat(a.name)}),setTimeout(function(){n.setState({ilmoitus:null})},5e3)})}},n.state={persons:[{name:"Arto Hellas",number:"040-123456"}],newName:"",newNumber:"",ilmoitus:""},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.getAll().then(function(t){var n=t.data;console.log(n),e.setState({persons:t.data})})}},{key:"render",value:function(){var e=this,t=this.state.persons;return console.log(t),o.a.createElement("div",null,o.a.createElement("h2",null,"Puhelinluettelo"),o.a.createElement("form",{onSubmit:this.addPerson},o.a.createElement("div",null,"nimi: ",o.a.createElement("input",{value:this.state.newName,onChange:this.handleNameChange})),o.a.createElement("div",null,"numero: ",o.a.createElement("input",{value:this.state.newNumber,onChange:this.handleNumberChange})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"lis\xe4\xe4"))),o.a.createElement("h2",null,"Numerot"),o.a.createElement(b,{ilmoitus:this.state.ilmoitus}),t.map(function(t){return o.a.createElement("div",{key:t.id},o.a.createElement(h,{name:t.name,number:t.number}),o.a.createElement("button",{key:t.id,onClick:function(){e.deletePerson(t.id)}},"x"))}))}}]),t}(o.a.Component));i.a.render(o.a.createElement(g,null),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.9b1dfc92.chunk.js.map