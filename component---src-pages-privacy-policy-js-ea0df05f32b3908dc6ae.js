(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"privacyPolicyQuery",function(){return l});var s=a(0),i=a.n(s),n=a(151);t.default=function(e){var t=e.data.markdownRemark,a=t.frontmatter,s=t.html,l=a.subtitle,r=a.title;return i.a.createElement(n.a,{heroTitle:r,heroSubtitle:l},i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"usa-grid"},i.a.createElement("div",{className:"text-container",dangerouslySetInnerHTML:{__html:s}}))))};var l="2880958223"},148:function(e,t,a){"use strict";a(29);var s=a(154),i=a.n(s),n=a(0),l=a.n(n),r=a(147),o=a.n(r);t.a=function(e){var t=e.children,a=e.to,s=i()(e,["children","to"]);return/^\/(?!\/)/.test(a)?l.a.createElement(o.a,Object.assign({to:a},s),t):l.a.createElement("a",Object.assign({href:a},s),t)}},149:function(e,t,a){var s=a(21).f,i=Function.prototype,n=/^\s*function ([^ (]*)/;"name"in i||a(15)&&s(i,"name",{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(e){return""}}})},150:function(e,t,a){"use strict";var s=a(8);t.__esModule=!0,t.default=void 0;var i,n=s(a(6)),l=s(a(46)),r=s(a(154)),o=s(a(165)),d=s(a(0)),c=s(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},p={},m=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!p[a]||(p[a]=!0,!1)},f=[];var h=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){f.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),f.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",s=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ',r=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+s+i+"<img "+r+o+t+l+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,s=e.onLoad,i=e.onError,n=(0,r.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,o.default)({},n,{onLoad:s,onError:i,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var s=!0,i=!0,n=!1,r=t.fadeIn,o=m(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=!1,i=!1,n=!0),"undefined"==typeof window&&(s=!1,i=!1),t.critical&&(s=!0,i=!1,n=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:s,imgLoaded:i,IOSupported:n,fadeIn:r,hasNoScript:c,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)((0,l.default)(a))),a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,s=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,r=void 0===l?{}:l,c=e.placeholderStyle,p=void 0===c?{}:c,m=e.placeholderClassName,f=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.Tag,w="boolean"==typeof b?"lightgray":b,k=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},r,p),E=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},r),_={title:t,alt:this.state.isVisible?"":a,style:k,className:m};if(f){var S=f;return d.default.createElement(v,{className:(s||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(S.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/S.aspectRatio+"%"}}),S.base64&&d.default.createElement(y,(0,o.default)({src:S.base64},_)),S.tracedSVG&&d.default.createElement(y,(0,o.default)({src:S.tracedSVG},_)),w&&d.default.createElement(v,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,S.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),d.default.createElement("source",{srcSet:S.srcSet,sizes:S.sizes}),d.default.createElement(y,{alt:a,title:t,src:S.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},S))}}))}if(h){var j=h,I=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete I.display,d.default.createElement(v,{className:(s||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},j.base64&&d.default.createElement(y,(0,o.default)({src:j.base64},_)),j.tracedSVG&&d.default.createElement(y,(0,o.default)({src:j.tracedSVG},_)),w&&d.default.createElement(v,{title:t,style:{backgroundColor:w,width:j.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:j.height}}),this.state.isVisible&&d.default.createElement("picture",null,j.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),d.default.createElement("source",{srcSet:j.srcSet,sizes:j.sizes}),d.default.createElement(y,{alt:a,title:t,width:j.width,height:j.height,src:j.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,width:j.width,height:j.height},j))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,Tag:c.default.string};var k=b;t.default=k},151:function(e,t,a){"use strict";var s=a(152),i=a(0),n=a.n(i),l=a(163),r=a.n(l),o=a(156),d=a(158),c=(a(149),a(4)),u=a.n(c),p=a(150),m=a.n(p),f=a(153),h=a.n(f),g=a(148),y=function(e){var t=e.client_name,a=e.title,s=e.subtitle,i=e.cta_text,l=e.cta_link,r=(e.cta_is_external,e.hero_class),o=e.image,d=e.location,c=e.personal_pronouns,u=e.social,p=o?n.a.createElement("div",{className:"hero__image"},n.a.createElement(m.a,{fluid:o.childImageSharp.fluid,alt:"Image of "+a})):"";var f,y,b,v=l?n.a.createElement(g.a,{to:(f=l,"INTERNAL_DITAP_FILE"===f?h.a:f),children:i,className:"link-button usa-button-navy"}):null,w=d?n.a.createElement("div",{className:"hero__location"},d," "):"",k=c?n.a.createElement("div",{className:"hero__personal_pronouns"},c," "):null;return u&&(y=u.map(function(e,t){return n.a.createElement("a",{className:"hero__social--link",key:t,href:e.url}," ",e.name," ")}),b=n.a.createElement("div",{className:"hero__social"},y," ")),n.a.createElement("section",{className:"hero usa-grid "+r},p,n.a.createElement("div",{className:"hero__text"},n.a.createElement("div",{className:"hero__client-name"},t),n.a.createElement("h1",{className:"hero__title"+(k?" no-space-underneath":"")},a),k,n.a.createElement("div",{className:"hero__intro-text"},s),w,b,v))},b=y;y.propTypes={title:u.a.string,subtitle:u.a.string,cta_text:u.a.string,cta_link:u.a.string};var v=a(162),w=a(161),k=a(157),E=a.n(k),_=a(159),S=a(160),j=a.n(S);t.a=function(e){e.siteData;var t=e.children,a=e.pageTitle,i=e.clientName,l=e.heroTitle,c=e.heroSubtitle,u=e.heroCTAText,p=e.heroCTALink,m=e.heroClass,f=e.heroIsExternal,h=e.hideSubFooter,g=e.teamImage,y=e.ogImage,k=e.location,S=e.personal_pronouns,I=e.social;return n.a.createElement(o.StaticQuery,{query:"1879170749",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(r.a,{title:a,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"},{name:"og:site_name",content:e.site.siteMetadata.title},{property:"og:type",content:"website"},{property:"og:url",content:k},{property:"og:title",content:l},{property:"og:description",content:c},{property:"og:image",content:y},{name:"twitter:card",content:E.a.seo.twitterCard},{name:"twitter:site",content:E.a.seo.twitterSite},{property:"fb:app_id",content:E.a.seo.fbAppId},{property:"og:email",content:e.site.siteMetadata.email},{property:"og:phone_number",content:e.site.siteMetadata.phone}]}),n.a.createElement("header",{className:"section header__main",style:{backgroundImage:"url("+j.a+")"}},n.a.createElement("section",{className:"usa-nav-container"},n.a.createElement("div",{className:"usa-navbar"},n.a.createElement(d.a,{siteTitle:"CivicActions"}),n.a.createElement("button",{className:"usa-menu-btn"},"Menu")),n.a.createElement(_.a,{pages:e.allSitePage})),n.a.createElement(b,{client_name:i,title:l,subtitle:c,cta_text:u,cta_link:p,cta_is_external:f,hero_class:m,image:g,location:k,personal_pronouns:S,social:I})),n.a.createElement("main",null,n.a.createElement("div",null,t)),n.a.createElement(v.a,{hide:h}),n.a.createElement(w.a,{email:e.site.siteMetadata.email,phone:e.site.siteMetadata.phone,address:e.site.siteMetadata.address,address_line_2:e.site.siteMetadata.address_line_2,city:e.site.siteMetadata.city}))},data:s})}},152:function(e){e.exports={data:{site:{siteMetadata:{title:"CivicActions | Open and Agile Digital Government Services",email:"contact@civicactions.com",phone:"(510) 408-7510",address:"3527 Mt Diablo Blvd,",address_line_2:"Unit 269,",city:"Lafayette, CA 94549"}},allSitePage:{edges:[{node:{path:"/dev-404-page/",fields:{slug:"/dev-404-page/"}}},{node:{path:"/press",fields:{slug:"/press"}}},{node:{path:"/press/2",fields:{slug:"/press/2"}}},{node:{path:"/press/3",fields:{slug:"/press/3"}}},{node:{path:"/press/4",fields:{slug:"/press/4"}}},{node:{path:"/press/5",fields:{slug:"/press/5"}}},{node:{path:"/capabilities",fields:{slug:"/capabilities"}}},{node:{path:"/",fields:{slug:"/"}}},{node:{path:"/education-services",fields:{slug:"/education-services"}}},{node:{path:"/feedback",fields:{slug:"/feedback"}}},{node:{path:"/case-study/digital-democracy",fields:{slug:"/case-study/digital-democracy"}}},{node:{path:"/case-study/eatfresh",fields:{slug:"/case-study/eatfresh"}}},{node:{path:"/case-study/fcc",fields:{slug:"/case-study/fcc"}}},{node:{path:"/case-study/globalnet",fields:{slug:"/case-study/globalnet"}}},{node:{path:"/case-study/hhs",fields:{slug:"/case-study/hhs"}}},{node:{path:"/case-study/msf",fields:{slug:"/case-study/msf"}}},{node:{path:"/case-study/smithsonian",fields:{slug:"/case-study/smithsonian"}}},{node:{path:"/case-study/usva",fields:{slug:"/case-study/usva"}}},{node:{path:"/case-study/cdt-foss",fields:{slug:"/case-study/cdt-foss"}}},{node:{path:"/case-study/lincs",fields:{slug:"/case-study/lincs"}}},{node:{path:"/case-study/mta",fields:{slug:"/case-study/mta"}}},{node:{path:"/team/aaron-burt",fields:{slug:"/team/aaron-burt"}}},{node:{path:"/team/aaron-couch",fields:{slug:"/team/aaron-couch"}}},{node:{path:"/team/aaron-pava",fields:{slug:"/team/aaron-pava"}}},{node:{path:"/team/adrienne-cabouet",fields:{slug:"/team/adrienne-cabouet"}}},{node:{path:"/team/alaine-karoleff",fields:{slug:"/team/alaine-karoleff"}}},{node:{path:"/team-alex-scott",fields:{slug:"/team-alex-scott"}}},{node:{path:"/team/amanda-miklik",fields:{slug:"/team/amanda-miklik"}}},{node:{path:"/team/andrew-bond",fields:{slug:"/team/andrew-bond"}}},{node:{path:"/team/andrew-hoppin",fields:{slug:"/team/andrew-hoppin"}}},{node:{path:"/team/andy-hawks",fields:{slug:"/team/andy-hawks"}}},{node:{path:"/team/arpit-patil",fields:{slug:"/team/arpit-patil"}}},{node:{path:"/team/ashish-kumar",fields:{slug:"/team/ashish-kumar"}}},{node:{path:"/team/ben-hafer",fields:{slug:"/team/ben-hafer"}}},{node:{path:"/team/beth-jacobsen",fields:{slug:"/team/beth-jacobsen"}}},{node:{path:"/team/bill-ogilvie",fields:{slug:"/team/bill-ogilvie"}}},{node:{path:"/team/bob-schmitt",fields:{slug:"/team/bob-schmitt"}}},{node:{path:"/team/brian-seek",fields:{slug:"/team/brian-seek"}}},{node:{path:"/team/cameron-prince",fields:{slug:"/team/cameron-prince"}}},{node:{path:"/team/dan-feder",fields:{slug:"/team/dan-feder"}}},{node:{path:"/team/dan-gurin",fields:{slug:"/team/dan-gurin"}}},{node:{path:"/team/daniel-gading",fields:{slug:"/team/daniel-gading"}}},{node:{path:"/team/daniel-schiavone",fields:{slug:"/team/daniel-schiavone"}}},{node:{path:"/team/david-numan",fields:{slug:"/team/david-numan"}}},{node:{path:"/team/di-hussey",fields:{slug:"/team/di-hussey"}}},{node:{path:"/team/dj-green",fields:{slug:"/team/dj-green"}}},{node:{path:"/team/dustin-boeger",fields:{slug:"/team/dustin-boeger"}}},{node:{path:"/team/elizabeth-raley",fields:{slug:"/team/elizabeth-raley"}}},{node:{path:"/team/eric-napier",fields:{slug:"/team/eric-napier"}}},{node:{path:"/team/ero-gray",fields:{slug:"/team/ero-gray"}}},{node:{path:"/team/ethan-teague",fields:{slug:"/team/ethan-teague"}}},{node:{path:"/team/fen-labalme",fields:{slug:"/team/fen-labalme"}}},{node:{path:"/team/gefter-chongong",fields:{slug:"/team/gefter-chongong"}}},{node:{path:"/team/gerardo-gonzalez",fields:{slug:"/team/gerardo-gonzalez"}}},{node:{path:"/team/grace-mckinney",fields:{slug:"/team/grace-mckinney"}}},{node:{path:"/team/greg-elin",fields:{slug:"/team/greg-elin"}}},{node:{path:"/team/henry-poole",fields:{slug:"/team/henry-poole"}}},{node:{path:"/team/iris-ibekwe",fields:{slug:"/team/iris-ibekwe"}}},{node:{path:"/team/holly-french",fields:{slug:"/team/holly-french"}}},{node:{path:"/team/jacqueline-gu",fields:{slug:"/team/jacqueline-gu"}}},{node:{path:"/team/janette-day",fields:{slug:"/team/janette-day"}}},{node:{path:"/team/jason-heaster",fields:{slug:"/team/jason-heaster"}}},{node:{path:"/team/jay-darnell",fields:{slug:"/team/jay-darnell"}}},{node:{path:"/team/jen-harris",fields:{slug:"/team/jen-harris"}}},{node:{path:"/team/jim-bader",fields:{slug:"/team/jim-bader"}}},{node:{path:"/team/john-erhardt",fields:{slug:"/team/john-erhardt"}}},{node:{path:"/team/karen-johnson",fields:{slug:"/team/karen-johnson"}}},{node:{path:"/team/kate-garklavs-saul",fields:{slug:"/team/kate-garklavs-saul"}}},{node:{path:"/team/ken-renshaw",fields:{slug:"/team/ken-renshaw"}}},{node:{path:"/team/kevin-walsh",fields:{slug:"/team/kevin-walsh"}}},{node:{path:"/team/kim-davidson",fields:{slug:"/team/kim-davidson"}}},{node:{path:"/team/kristian-ducharme",fields:{slug:"/team/kristian-ducharme"}}},{node:{path:"/team/luke-fretwell",fields:{slug:"/team/luke-fretwell"}}},{node:{path:"/team/marc-jones",fields:{slug:"/team/marc-jones"}}},{node:{path:"/team/may-lyn-medina",fields:{slug:"/team/may-lyn-medina"}}},{node:{path:"/team/melinda-burgess",fields:{slug:"/team/melinda-burgess"}}},{node:{path:"/team/owen-barton",fields:{slug:"/team/owen-barton"}}},{node:{path:"/team/rachel-kauff",fields:{slug:"/team/rachel-kauff"}}},{node:{path:"/team/rachel-kroft",fields:{slug:"/team/rachel-kroft"}}},{node:{path:"/team/rob-read",fields:{slug:"/team/rob-read"}}},{node:{path:"/team/sam-lerner",fields:{slug:"/team/sam-lerner"}}},{node:{path:"/team/sreekar-peddi",fields:{slug:"/team/sreekar-peddi"}}},{node:{path:"/team/srikanth-chowdhary",fields:{slug:"/team/srikanth-chowdhary"}}},{node:{path:"/team/stefanie-gray",fields:{slug:"/team/stefanie-gray"}}},{node:{path:"/team/steve-curtis",fields:{slug:"/team/steve-curtis"}}},{node:{path:"/team/steve-wirt",fields:{slug:"/team/steve-wirt"}}},{node:{path:"/team/susie-bird",fields:{slug:"/team/susie-bird"}}},{node:{path:"/team/tom-camp",fields:{slug:"/team/tom-camp"}}},{node:{path:"/team/tom-wood",fields:{slug:"/team/tom-wood"}}},{node:{path:"/team/tony-cooper",fields:{slug:"/team/tony-cooper"}}},{node:{path:"/team/tony-fortenberry",fields:{slug:"/team/tony-fortenberry"}}},{node:{path:"/team/john-o-duinn",fields:{slug:"/team/john-o-duinn"}}},{node:{path:"/team/josh-rose",fields:{slug:"/team/josh-rose"}}},{node:{path:"/team/judy-raiten",fields:{slug:"/team/judy-raiten"}}},{node:{path:"/press/civicactions-joins-digital-services-coalition",fields:{slug:"/press/civicactions-joins-digital-services-coalition"}}},{node:{path:"/press/remote-teams-offer-competitive-advantage",fields:{slug:"/press/remote-teams-offer-competitive-advantage"}}},{node:{path:"/press/govtech-2019-top-100-companies",fields:{slug:"/press/govtech-2019-top-100-companies"}}},{node:{path:"/press/civicactions-featured-world-changing-drupal-sites",fields:{slug:"/press/civicactions-featured-world-changing-drupal-sites"}}},{node:{path:"/press/new-york-city-delivers-real-time-data-metro-riders",fields:{slug:"/press/new-york-city-delivers-real-time-data-metro-riders"}}},{node:{path:"/press/aaron-pava-executive-director-agl",fields:{slug:"/press/aaron-pava-executive-director-agl"}}},{node:{path:"/press/people-are-the-real-metrics",fields:{slug:"/press/people-are-the-real-metrics"}}},{node:{path:"/press/happy-productive-remote-teams",fields:{slug:"/press/happy-productive-remote-teams"}}},{node:{path:"/press/govtech-2018-top-100-companies",fields:{slug:"/press/govtech-2018-top-100-companies"}}},{node:{path:"/press/best-50-top-workplaces-2017",fields:{slug:"/press/best-50-top-workplaces-2017"}}},{node:{path:"/press/civicactions-expands-with-dkan",fields:{slug:"/press/civicactions-expands-with-dkan"}}},{node:{path:"/press/california-child-welfare-hires-civicactions",fields:{slug:"/press/california-child-welfare-hires-civicactions"}}},{node:{path:"/press/gcn-interview-smart-open-source",fields:{slug:"/press/gcn-interview-smart-open-source"}}},{node:{path:"/press/online-agile-course-targets-gov-execs",fields:{slug:"/press/online-agile-course-targets-gov-execs"}}},{node:{path:"/press/govtech-2017-top-100-companies",fields:{slug:"/press/govtech-2017-top-100-companies"}}},{node:{path:"/press/2016-fedscoop-it-summit",fields:{slug:"/press/2016-fedscoop-it-summit"}}},{node:{path:"/press/2016-california-technology-forum",fields:{slug:"/press/2016-california-technology-forum"}}},{node:{path:"/press/sharing-openly-with-competitors",fields:{slug:"/press/sharing-openly-with-competitors"}}},{node:{path:"/press/launch-of-agl-academy",fields:{slug:"/press/launch-of-agl-academy"}}},{node:{path:"/press/goodbye-100-page-rfps",fields:{slug:"/press/goodbye-100-page-rfps"}}},{node:{path:"/press/18f-agile-contract",fields:{slug:"/press/18f-agile-contract"}}},{node:{path:"/press/fcw-embracing-agile",fields:{slug:"/press/fcw-embracing-agile"}}},{node:{path:"/press/fcw-is-gov-ready-for-agile",fields:{slug:"/press/fcw-is-gov-ready-for-agile"}}},{node:{path:"/press/what-agile-should-look-like-in-federal-gov",fields:{slug:"/press/what-agile-should-look-like-in-federal-gov"}}},{node:{path:"/press/overcome-roadblocks-to-agile",fields:{slug:"/press/overcome-roadblocks-to-agile"}}},{node:{path:"/404/",fields:{slug:"/404/"}}},{node:{path:"/approach/",fields:{slug:"/approach/"}}},{node:{path:"/careers/",fields:{slug:"/careers/"}}},{node:{path:"/case-study/",fields:{slug:"/case-study/"}}},{node:{path:"/communities/",fields:{slug:"/communities/"}}},{node:{path:"/contact/",fields:{slug:"/contact/"}}},{node:{path:"/dkan/",fields:{slug:"/dkan/"}}},{node:{path:"/licensing-policy/",fields:{slug:"/licensing-policy/"}}},{node:{path:"/privacy-policy/",fields:{slug:"/privacy-policy/"}}},{node:{path:"/team/",fields:{slug:"/team/"}}},{node:{path:"/thank-you/",fields:{slug:"/thank-you/"}}},{node:{path:"/values/",fields:{slug:"/values/"}}},{node:{path:"/404.html",fields:{slug:"/404.html"}}}]}}}},153:function(e,t,a){e.exports=a.p+"static/CivicActions-DITAP-316da5015db82fd1e580b049e02a4c6e.pdf"}}]);
//# sourceMappingURL=component---src-pages-privacy-policy-js-ea0df05f32b3908dc6ae.js.map