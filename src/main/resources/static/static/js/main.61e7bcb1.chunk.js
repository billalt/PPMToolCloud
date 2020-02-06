(this["webpackJsonpppmtool-react-client"]=this["webpackJsonpppmtool-react-client"]||[]).push([[0],{46:function(e,t,a){e.exports=a(79)},51:function(e,t,a){},52:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(25),o=a.n(c),s=(a(51),a(1)),i=a(2),l=a(5),m=a(3),u=a(6),p=(a(52),a(8)),d=a(4),h=a(9),v=a.n(h),E=a(12),f=a.n(E),b=function(e,t){return function(a){return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.a.awrap(f.a.post("/api/project",e));case 3:t.push("/dashboard"),a({type:"GET_ERRORS",payload:{}}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),a({type:"GET_ERRORS",payload:r.t0.response.data});case 10:case"end":return r.stop()}}),null,null,[[0,7]])}},j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).onDeleteClick=function(e){a.props.deleteProject(e)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.project;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card card-body bg-light mb-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-2"},n.a.createElement("span",{className:"mx-auto"},e.projectIdentifier)),n.a.createElement("div",{className:"col-lg-6 col-md-4 col-8"},n.a.createElement("h3",null,e.projectName),n.a.createElement("p",null,e.description)),n.a.createElement("div",{className:"col-md-4 d-none d-lg-block"},n.a.createElement("ul",{className:"list-group"},n.a.createElement(p.b,{to:"/projectBoard/".concat(e.projectIdentifier)},n.a.createElement("li",{className:"list-group-item board"},n.a.createElement("i",{className:"fa fa-flag-checkered pr-1"}," Project Board "))),n.a.createElement(p.b,{to:"/updateProject/".concat(e.projectIdentifier)},n.a.createElement("li",{className:"list-group-item update"},n.a.createElement("i",{className:"fa fa-edit pr-1"}," Update Project Info"))),n.a.createElement("li",{className:"list-group-item delete",onClick:this.onDeleteClick.bind(this,e.projectIdentifier)},n.a.createElement("i",{className:"fa fa-minus-circle pr-1"}," Delete Project")))))))}}]),t}(r.Component),g=Object(d.b)(null,{deleteProject:function(e){return function(t){return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.confirm("Are you sure? This will delete the project and all the data related to it")){a.next=4;break}return a.next=3,v.a.awrap(f.a.delete("/api/project/".concat(e)));case 3:t({type:"DELETE_PROJECT",payload:e});case 4:case"end":return a.stop()}}))}}})(j),y=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.b,{to:"/addProject",className:"btn btn-lg btn-info"},"Create a Project"))},N=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){var e=this.props.project.projects;return n.a.createElement("div",{className:"projects"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"display-4 text-center"},"Projects"),n.a.createElement("br",null),n.a.createElement(y,null),n.a.createElement("br",null),n.a.createElement("hr",null),e.map((function(e){return n.a.createElement(g,{key:e.id,project:e})}))))))}}]),t}(r.Component),O=Object(d.b)((function(e){return{project:e.project}}),{getProjects:function(){return function(e){var t;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.a.awrap(f.a.get("/api/project/all"));case 2:t=a.sent,e({type:"GET_PROJECTS",payload:t.data});case 4:case"end":return a.stop()}}))}}})(N),k=function(e){e?f.a.defaults.headers.common.Authorization=e:delete f.a.defaults.headers.common.Authorization},C=a(27),_=a.n(C),S=function(){return function(e){localStorage.removeItem("jwtToken"),k(!1),e({type:"SET_CURRENT_USER",payload:{}})}},w=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"logout",value:function(){this.props.logout(),window.location.href="/"}},{key:"render",value:function(){var e,t=this.props.security,a=t.validToken,r=t.user,c=n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/dashboard"},"Dashboard"))),n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link ",to:"/dashboard"},n.a.createElement("i",{className:"fas fa-user-circle mr-1"}),r.fullName)),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/logout",onClick:this.logout.bind(this)},"Logout")))),o=n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link ",to:"/register"},"Sign up")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/login"},"Login"))));return e=a&&r?c:o,n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-4"},n.a.createElement("div",{className:"container"},n.a.createElement(p.b,{className:"navbar-brand",to:"/"},"\u05e0\u05d9\u05d4\u05d5\u05dc \u05ea\u05d9\u05e7\u05d9 \u05dc\u05d5\u05e7\u05d5\u05d7\u05d5\u05ea \u05dc\u05de\u05e9\u05e8\u05d3 \u05e2\u05d5\u05e8\u05db\u05d9 \u05d3\u05d9\u05df"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mobile-nav"},n.a.createElement("span",{className:"navbar-toggler-icon"})),e))}}]),t}(r.Component),P=Object(d.b)((function(e){return{security:e.security}}),{logout:S})(w),x=(a(78),a(23)),T=a(14),R=a(11),D=a(10),I=a.n(D),G=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onChange=e.onChange.bind(Object(R.a)(e)),e.onSubmit=e.onSubmit.bind(Object(R.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(T.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,start_date:this.state.start_date,end_date:this.state.end_date};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",null,n.a.createElement("h1",null,e.projectName),n.a.createElement("div",{className:"register"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Create Project form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:I()("form-control form-control-lg ",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange.bind(this)}),e.projectName&&n.a.createElement("div",{className:"invalid-feedback"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:I()("form-control form-control-lg ",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange}),e.projectIdentifier&&n.a.createElement("div",{className:"invalid-feedback"},e.projectIdentifier)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:I()("form-control form-control-lg ",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&n.a.createElement("div",{className:"invalid-feedback"},e.description)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:this.state.start_date,onChange:this.onChange})),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:this.state.end_date,onChange:this.onChange})),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})))))))}}]),t}(r.Component),A=Object(d.b)((function(e){return{errors:e.errors}}),{createProject:b})(G),U=a(19),B=a(44),K={},L=a(20),q={projects:[],project:{}},J={project_tasks:[],project_task:{}},M={user:{},validToken:!1},W=function(e){return!!e},F=Object(U.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROJECTS":return Object(L.a)({},e,{projects:t.payload});case"GET_PROJECT":return Object(L.a)({},e,{project:t.payload});case"DELETE_PROJECT":return Object(L.a)({},e,{projects:e.projects.filter((function(e){return e.projectIdentifier!==t.payload}))});default:return e}},backlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BACKLOG":return Object(L.a)({},e,{project_tasks:t.payload});case"GET_PROJECT_TASK":return Object(L.a)({},e,{project_task:t.payload});case"DELETE_PROJECT_TASK":return Object(L.a)({},e,{project_tasks:e.project_tasks.filter((function(e){return e.projectSequence!==t.payload}))});default:return e}},security:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(L.a)({},e,{validToken:W(t.payload),user:t.payload});default:return e}}}),H={},V=[B.a],X=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),z=window.navigator.userAgent.includes("Chrome")&&X?Object(U.e)(F,H,Object(U.d)(U.a.apply(void 0,V),X)):Object(U.e)(F,H,Object(U.d)(U.a.apply(void 0,V))),Y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={id:"",projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onChange=e.onChange.bind(Object(R.a)(e)),e.onSubmit=e.onSubmit.bind(Object(R.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.project,a=t.id,r=t.projectName,n=t.projectIdentifier,c=t.description,o=t.start_date,s=t.end_date;this.setState({id:a,projectName:r,projectIdentifier:n,description:c,start_date:o,end_date:s})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProject(e,this.props.history)}},{key:"onChange",value:function(e){this.setState(Object(T.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,start_date:this.state.start_date,end_date:this.state.end_date};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Update Project form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:I()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&n.a.createElement("div",{className:"invalid-feedback"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange,disabled:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:I()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&n.a.createElement("div",{className:"invalid-feedback"},e.description)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:I()("form-control form-control-lg",{"is-invalid":e.end_date}),name:"start_date",value:this.state.start_date,onChange:this.onChange}),e.start_date&&n.a.createElement("div",{className:"invalid-feedback"},e.start_date)),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:I()("form-control form-control-lg",{"is-invalid":e.end_date}),name:"end_date",value:this.state.end_date,onChange:this.onChange}),e.start_date&&n.a.createElement("div",{className:"invalid-feedback"},e.start_date)),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(r.Component),$=Object(d.b)((function(e){return{project:e.project.project,errors:e.errors}}),{getProject:function(e,t){return function(a){var r;return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.awrap(f.a.get("/api/project/".concat(e)));case 3:r=n.sent,a({type:"GET_PROJECT",payload:r.data}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),t.push("/dashboard");case 10:case"end":return n.stop()}}),null,null,[[0,7]])}},createProject:b})(Y),Q=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onDeleteClick",value:function(e,t){this.props.deleteProjectTask(e,t)}},{key:"render",value:function(){var e,t,a=this.props.project_task;return 1===a.priority&&(t="bg-danger text-light",e=" HIGH"),2===a.priority&&(t="bg-warning text-light",e=" MEDIUM"),3===a.priority&&(t="bg-info text-light",e=" LOW"),n.a.createElement("div",{className:"card mb-1 bg-light"},n.a.createElement("div",{className:"card-header text-primary ".concat(t)},"ID: ",a.projectSequence," -- Priority:",e),n.a.createElement("div",{className:"card-body bg-light"},n.a.createElement("h5",{className:"card-title"},a.summary),n.a.createElement("p",{className:"card-text text-truncate "},a.acceptanceCriteria),n.a.createElement(p.b,{to:"/updateProjectTask/".concat(a.projectIdentifier,"/").concat(a.projectSequence),className:"btn btn-primary"},"View / Update"),n.a.createElement("button",{className:"btn btn-danger ml-4",onClick:this.onDeleteClick.bind(this,a.projectIdentifier,a.projectSequence)},"Delete")))}}]),t}(r.Component),Z=Object(d.b)(null,{deleteProjectTask:function(e,t){return function(a){return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!window.confirm("You are deleteing a project task ".concat(t,", this action cannot be undone"))){r.next=4;break}return r.next=3,v.a.awrap(f.a.delete("/api/backlog/".concat(e,"/").concat(t)));case 3:a({type:"DELETE_PROJECT_TASK",payload:t});case 4:case"end":return r.stop()}}))}}})(Q),ee=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){for(var e=this.props.project_tasks_prop.map((function(e){return n.a.createElement(Z,{key:e.id,project_task:e})})),t=[],a=[],r=[],c=0;c<e.length;c++)"TO_DO"===e[c].props.project_task.status?t.push(e[c]):"IN_PROGRESS"===e[c].props.project_task.status?a.push(e[c]):r.push(e[c]);return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-secondary text-white"},n.a.createElement("h3",null,"TO DO"))),t),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-primary text-white"},n.a.createElement("h3",null,"In Progress"))),a),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-success text-white"},n.a.createElement("h3",null,"Done"))),r)))}}]),t}(r.Component),te=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={errors:{}},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getBacklog(e)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e,t=this.props.match.params.id,a=this.props.backlog.project_tasks;return e=function(e,t){return t.length<1?e.projectNotFound?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},e.projectNotFound):e.projectIdentifier?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},e.projectIdentifier):n.a.createElement("div",{className:"alert alert-info text-center",role:"alert"},"No Project Tasks on this board"):n.a.createElement(ee,{project_tasks_prop:t})}(this.state.errors,a),n.a.createElement("div",{className:"container"},n.a.createElement(p.b,{to:"/addProjectTask/".concat(t),className:"btn btn-primary mb-3"},n.a.createElement("i",{className:"fas fa-plus-circle"}," Create Project Task")),n.a.createElement("br",null),n.a.createElement("hr",null),e)}}]),t}(r.Component),ae=Object(d.b)((function(e){return{backlog:e.backlog,errors:e.errors}}),{getBacklog:function(e){return function(t){var a;return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.a.awrap(f.a.get("/api/backlog/".concat(e)));case 3:a=r.sent,t({type:"GET_BACKLOG",payload:a.data}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),t({type:"GET_ERRORS",payload:r.t0.response.data});case 10:case"end":return r.stop()}}),null,null,[[0,7]])}}})(te),re=function(e){function t(e){var a;Object(s.a)(this,t);var r=(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).props.match.params.id;return a.state={summary:"",acceptanceCriteria:"",status:"",priority:0,dueDate:"",projectIdentifier:r,errors:{}},a.onChange=a.onChange.bind(Object(R.a)(a)),a.onSubmit=a.onSubmit.bind(Object(R.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(T.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate};this.props.addProjectTask(this.state.projectIdentifier,t,this.props.history)}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.state.errors;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(p.b,{to:"/projectBoard/".concat(e),className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h4",{className:"display-4 text-center"},"Add Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name + Project Code"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:I()("form-control form-control-lg",{"is-invalid":t.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),t.summary&&n.a.createElement("div",{className:"invalid-feedback"},t.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange})),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(r.Component),ne=Object(d.b)((function(e){return{errors:e.errors}}),{addProjectTask:function(e,t,a){return function(r){return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.awrap(f.a.post("/api/backlog/".concat(e),t));case 3:a.push("/projectBoard/".concat(e)),r({type:"GET_ERRORS",payload:{}}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),r({type:"GET_ERRORS",payload:n.t0.response.data});case 10:case"end":return n.stop()}}),null,null,[[0,7]])}}})(re),ce=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={id:"",projectSequence:"",summary:"",acceptanceCriteria:"",status:"",priority:"",dueDate:"",created_At:"",projectIdentifier:"",errors:{}},e.onChange=e.onChange.bind(Object(R.a)(e)),e.onSubmit=e.onSubmit.bind(Object(R.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.backlog_id,a=e.pt_id;this.props.getProjectTask(t,a,this.props.history)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.project_task,a=t.id,r=t.projectSequence,n=t.summary,c=t.acceptanceCriteria,o=t.status,s=t.priority,i=t.dueDate,l=t.created_At,m=t.projectIdentifier;this.setState({id:a,projectSequence:r,summary:n,acceptanceCriteria:c,status:o,priority:s,dueDate:i,created_At:l,projectIdentifier:m})}},{key:"onChange",value:function(e){this.setState(Object(T.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectSequence:this.state.projectSequence,summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate,created_At:this.state.created_At,projectIdentifier:this.state.projectIdentifier};this.props.updateProjectTask(this.state.projectIdentifier,this.state.projectSequence,t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(p.b,{to:"/projectBoard/".concat(this.state.projectIdentifier),className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h4",{className:"display-4 text-center"},"Update Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name: ",this.state.projectIdentifier," + Project Task ID:"," ",this.state.projectSequence," "),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:I()("form-control form-control-lg",{"is-invalid":e.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),e.summary&&n.a.createElement("div",{className:"invalid-feedback"},e.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange})),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(r.Component),oe=Object(d.b)((function(e){return{project_task:e.backlog.project_task,errors:e.errors}}),{getProjectTask:function(e,t,a){return function(r){var n;return v.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,v.a.awrap(f.a.get("/api/backlog/".concat(e,"/").concat(t)));case 3:n=c.sent,r({type:"GET_PROJECT_TASK",payload:n.data}),c.next=10;break;case 7:c.prev=7,c.t0=c.catch(0),a.push("/dashboard");case 10:case"end":return c.stop()}}),null,null,[[0,7]])}},updateProjectTask:function(e,t,a,r){return function(n){return v.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,v.a.awrap(f.a.patch("/api/backlog/".concat(e,"/").concat(t),a));case 3:r.push("/projectBoard/".concat(e)),n({type:"GET_ERRORS",payload:{}}),c.next=10;break;case 7:c.prev=7,c.t0=c.catch(0),n({type:"GET_ERRORS",payload:c.t0.response.data});case 10:case"end":return c.stop()}}),null,null,[[0,7]])}}})(ce),se=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){return n.a.createElement("div",{className:"landing"},n.a.createElement("div",{className:"light-overlay landing-inner text-dark"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("h1",{className:"display-3 mb-4"},"Personal Project Management Tool"),n.a.createElement("p",{className:"lead"},"Create your account to join active projects or start your own"),n.a.createElement("hr",null),n.a.createElement(p.b,{className:"btn btn-lg btn-primary mr-2",to:"/register"},"Sign Up"),n.a.createElement(p.b,{to:"/login",className:"btn btn-lg btn-secondary mr-2"},"Login"))))))}}]),t}(r.Component),ie=Object(d.b)((function(e){return{security:e.security}}))(se),le=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={username:"",fullName:"",password:"",confirmPassword:"",validationKey:"",errors:{}},e.onChange=e.onChange.bind(Object(R.a)(e)),e.onSubmit=e.onSubmit.bind(Object(R.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(T.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,fullName:this.state.fullName,password:this.state.password,confirmPassword:this.state.confirmPassword,validationKey:this.state.validationKey};this.props.createNewUser(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"register"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Sign Up"),n.a.createElement("p",{className:"lead text-center"},"Create your Account"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:I()("form-control form-control-lg",{"is-invalid":e.fullName}),placeholder:"Full Name",name:"fullName",value:this.state.fullName,onChange:this.onChange}),e.fullName&&n.a.createElement("div",{className:"invalid-feedback"},e.fullName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:I()("form-control form-control-lg",Object(T.a)({"is-invalid":e.username},"is-invalid",e.usernameAlreadyExist)),placeholder:"Email Address (Username)",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&n.a.createElement("div",{className:"invalid-feedback"},e.username),e.usernameAlreadyExist&&n.a.createElement("div",{className:"invalid-feedback"},e.usernameAlreadyExist)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:I()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&n.a.createElement("div",{className:"invalid-feedback"},e.password)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:I()("form-control form-control-lg",{"is-invalid":e.confirmPassword}),placeholder:"Confirm Password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.onChange}),e.confirmPassword&&n.a.createElement("div",{className:"invalid-feedback"},e.confirmPassword)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:I()("form-control form-control-lg",{"is-invalid":e.validationKey}),placeholder:"Validation Key",name:"validationKey",value:this.state.validationKey,onChange:this.onChange}),e.validationKey&&n.a.createElement("div",{className:"invalid-feedback"},e.validationKey)),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"}))))))}}]),t}(r.Component),me=Object(d.b)((function(e){return{security:e.security,errors:e.errors}}),{createNewUser:function(e,t){return function(a){return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,console.log("New User",e),r.next=4,v.a.awrap(f.a.post("/api/users/register",e));case 4:t.push("/login"),a({type:"GET_ERRORS",payload:{}}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),a({type:"GET_ERRORS",payload:r.t0.response.data});case 11:case"end":return r.stop()}}),null,null,[[0,8]])}}})(le),ue=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={username:"",password:"",errors:{}},e.onChange=e.onChange.bind(Object(R.a)(e)),e.onSubmit=e.onSubmit.bind(Object(R.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.security.validToken&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,password:this.state.password};this.props.login(t)}},{key:"onChange",value:function(e){this.setState(Object(T.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"login"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Log In"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:I()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&n.a.createElement("div",{className:"invalid-feedback"},e.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:I()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&n.a.createElement("div",{className:"invalid-feedback"},e.password)),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"}))))))}}]),t}(r.Component),pe=Object(d.b)((function(e){return{security:e.security,errors:e.errors}}),{login:function(e){return function(t){var a,r,n;return v.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,v.a.awrap(f.a.post("/api/users/login",e));case 3:a=c.sent,r=a.data.token,localStorage.setItem("jwtToken",r),k(r),n=_()(r),t({type:"SET_CURRENT_USER",payload:n}),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(0),t({type:"GET_ERRORS",payload:c.t0.response.data});case 14:case"end":return c.stop()}}),null,null,[[0,11]])}}})(ue),de=a(45),he=Object(d.b)((function(e){return{security:e.security}}))((function(e){var t=e.component,a=e.security,r=Object(de.a)(e,["component","security"]);return n.a.createElement(x.b,Object.assign({},r,{render:function(e){return!0===a.validToken?n.a.createElement(t,e):n.a.createElement(x.a,{to:"/login"})}}))})),ve=localStorage.jwtToken;if(ve){k(ve);var Ee=_()(ve);z.dispatch({type:"SET_CURRENT_USER",payload:Ee});var fe=Date.now()/1e3;Ee.exp<fe&&(z.dispatch(S()),window.location.href="/")}var be=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(d.a,{store:z},n.a.createElement(p.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(P,null),n.a.createElement(x.b,{exact:!0,path:"/",component:ie}),n.a.createElement(x.b,{exact:!0,path:"/register",component:me}),n.a.createElement(x.b,{exact:!0,path:"/login",component:pe}),n.a.createElement(x.d,null,n.a.createElement(he,{exact:!0,path:"/dashboard",component:O}),n.a.createElement(he,{exact:!0,path:"/addProject",component:A}),n.a.createElement(he,{exact:!0,path:"/updateProject/:id",component:$}),n.a.createElement(he,{exact:!0,path:"/projectBoard/:id",component:ae}),n.a.createElement(he,{exact:!0,path:"/addProjectTask/:id",component:ne}),n.a.createElement(he,{exact:!0,path:"/updateProjectTask/:backlog_id/:pt_id",component:oe})))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.61e7bcb1.chunk.js.map