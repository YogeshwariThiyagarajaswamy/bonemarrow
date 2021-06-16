$(function(){
	divCreation();
	contentFun();
});


function divCreation(){	

	//Banner Part Code
	$('<div class="banDiv"></div>').appendTo("body");	
 	$('<div class="logoImg"></div>').appendTo(".banDiv");	
 	$('<div class="banTxt"></div>').appendTo(".banDiv");	
 	$('<div class="banCont_1"></div>').appendTo(".banTxt");	
 	$('<div class="banCont_2"></div>').appendTo(".banTxt");	
	$('<button class="butCls" id="app">Book An Appoinment</button>').appendTo(".banTxt");

	//Enquiry Form Code
	$('<div class="enquireFormDiv"></div>').appendTo(".banDiv");	
	$('<div class="enquireTxt"></div>').appendTo(".enquireFormDiv");	
	for(i=1;i<=5;i++){
		$('<input class="txtBox" id="txt_'+i+'"> </button>').appendTo(".enquireFormDiv");
	}
	$('<button class="butCls" id="submit">Submit</button>').appendTo(".enquireFormDiv");
	$('<div class="checkbox"></div>').appendTo(".enquireFormDiv");	
	$('<div class="labelTxt"></div>').appendTo(".enquireFormDiv");	
	$('<div class="captcah"></div>').appendTo(".enquireFormDiv");	
	$('<div class="captcahTxt"></div>').appendTo(".enquireFormDiv");
	
	
	// Bone Marrow Code
	$('<div class="bmtContainer"></div>').appendTo("body");	
	$('<div class="boneCon"></div>').appendTo(".bmtContainer");
	$('<div class="boneImg"></div>').appendTo(".boneCon");
	$('<div class="boneTxt"></div>').appendTo(".boneCon");
	for(i=1;i<=4;i++){
		$('<div class="txtDiv" id="boneTxt_'+i+'"></div>').appendTo(".boneTxt");
	}
	
	// Doctors code	
	$('<div class="docContainer"></div>').appendTo("body");	
	$('<div class="doctorCon"></div>').appendTo(".docContainer");	
	$('<div class="doctor"></div>').appendTo(".doctorCon");	
	$('<div class="docDetails" id="doc_1"></div>').appendTo(".doctorCon");	
	$('<div class="docDetails" id="doc_2"></div>').appendTo(".doctorCon");	

	
	for(i=1;i<=2;i++){
		$('<div class="docDetailsCon" id="docCont1_'+i+'"></div>').appendTo("#doc_1");	
		$('<div class="docDetailsCon" id="docCont2_'+i+'"></div>').appendTo("#doc_2");
	}

	$('<div class="docBranch" id="docbr_1"></div>').appendTo("#docCont1_1");	
	$('<div class="docBranch" id="docbr_2"></div>').appendTo("#docCont2_1");	

	for(i=1;i<=6;i++){
		$('<div class="detailsCont" id="det1_'+i+'"></div>').appendTo("#docCont1_1");	
		$('<div class="detailsCont" id="det2_'+i+'"></div>').appendTo("#docCont1_2");	
		$('<div class="detailsCont" id="det3_'+i+'"></div>').appendTo("#docCont2_1");	
		$('<div class="detailsCont" id="det4_'+i+'"></div>').appendTo("#docCont2_2");	
	}

	//Types of Bone Marrow
	$('<div class="typesContainer" ></div>').appendTo("body");
	$('<div class="typesTextDiv"></div>').appendTo(".typesContainer");	
	$('<div class="typesHeadingDiv"></div>').appendTo(".typesTextDiv");	
	$('<div class="typesTextList"></div>').appendTo(".typesTextDiv");	

	//Immune Deficiency
	$('<div class="immuneContainer" ></div>').appendTo("body");
	$('<div class="immunetxtDiv"></div>').appendTo(".immuneContainer");
	$('<div class="immuneHeading"></div>').appendTo(".immunetxtDiv");
	for(i=1;i<=10;i++){
		$('<div class="immuneDetails" id="imdet_'+i+'"></div>').appendTo(".immunetxtDiv");
		$('<div class="immuneSign" id="immuneSign_'+i+'"></div>').appendTo("#imdet_"+i);
		$('<div class="immuneTxt" id="immuneTxt_'+i+'"></div>').appendTo("#imdet_"+i);
	}
	
	//conditions
	$('<div class="conditionCont" ></div>').appendTo("body");
	$('<div class="conditionTextCont"></div>').appendTo(".conditionCont");
	for(i=1;i<=8;i++){
		$('<div class="conditionTextDiv" id="conTxtDiv_'+i+'"></div>').appendTo(".conditionTextCont");
	}

	$('<div class="textDiv" id="conTxt_1"></div>').appendTo("#conTxtDiv_1");	
	$('<div class="downArrowDiv" id="arr_1"></div>').appendTo("#conTxtDiv_1");	
	for(i=2;i<=8;i++){
		$('<div class="textDiv" id="conTxt_'+i+'"></div>').appendTo("#conTxtDiv_"+(i+1));	
		$('<div class="downArrowDiv" id="arr_'+i+'"></div>').appendTo("#conTxtDiv_"+(i+1));	
	}

	// Testimony
	$('<div class="testimonyContainer" ></div>').appendTo("body");
	$('<div class="testimonyTextDiv"></div>').appendTo(".testimonyContainer");	
	$('<div class="testimonyHeading"></div>').appendTo(".testimonyTextDiv");	
	$('<div class="arrowDivs"></div>').appendTo(".testimonyTextDiv");
	$('<div class="arrow" id="left"></div>').appendTo(".arrowDivs");	
	$('<div class="arrow" id="right"></div>').appendTo(".arrowDivs");	
	$('<div class="textCls1"></div>').appendTo(".testimonyTextDiv");
	for(i=1;i<=3;i++){
		$('<div class="testimonies" id="test_'+i+'"></div>').appendTo(".testimonyTextDiv");
	}
	for(i=1;i<=5;i++){
		$('<div class="testimoniesDetails" id="testdet1_'+i+'"></div>').appendTo("#test_1");
		$('<div class="testimoniesDetails" id="testdet2_'+i+'"></div>').appendTo("#test_2");
		$('<div class="testimoniesDetails" id="testdet3_'+i+'"></div>').appendTo("#test_3");
	}
	$('<button class="butCls" id="test_app">Book An Appoinment</button>').appendTo(".testimonyTextDiv");


	// Footer

	$('<div class="footerCls" ></div>').appendTo("body");
	$('<div class="footerCont"></div>').appendTo(".footerCls");
	$('<div class="socialIconCont"></div>').appendTo(".footerCont");
	for(i=1;i<=5;i++){
		$('<div class="socialIcons" id="icon_'+i+'"></div>').appendTo(".socialIconCont");
	}
	$('<div class="topArrow"></div>').appendTo(".footerCont");
	$('<div class="copyRight"></div>').appendTo(".footerCont");

}


function contentFun(){
	//Banner Part Code
	$(".banCont_1").html("ADULT & PAEDIATRIC BONE MARROW </br>TRANSPLANT PROGRAMME");
	$(".banCont_2").text("Haematology | Oncology | Immunology");

	//Enquiry Form Code
	$(".enquireTxt").text("Enquire now");
	$("#txt_1").attr("placeholder","Name");
	$("#txt_2").attr("placeholder","Email ID");
	$("#txt_3").attr("placeholder","Phone Number");
	$("#txt_4").attr("placeholder","Your Message");
	$(".labelTxt").text("I'm not a robot");
	$(".captcahTxt").text("reCAPTCHA");

	// Bone Marrow Code
	$("#boneTxt_1").html("<p>Bone Marrow Transplant (BMT) better known as haematopoietic stem cell transplant(HSCT) as bone marrow cells are transplanted</p>");
	$("#boneTxt_2").text("Replacement of diseased or defective marrow with marrow from a healthy donor");
	$("#boneTxt_3").text("Medicines and in certain situations radiotherapy as well is given to get rid of diseased marrow and bone marrow cells from healthy donor is given to replace it.");
	$("#boneTxt_4").text("IN autologous bone marrow transplant, high dose chemotherapy is given to kill cancer cells and child own marrow cells are given back");

	// Doctors code
	$(".doctor").text("Doctors");
	$("#docbr_1").text("Pediatric BMT");
	$("#docbr_2").text("Adult BMT");
	$("#det1_2,#det2_2,#det3_2,#det4_2").text("Dr. Vijay Agarwal");
	$("#det1_3,#det2_3,#det3_3,#det4_3").html("MD, MRCP, PhD,CCT </br>Lead & Sr. Consultant - Medical Oncology & Haematology");
	$("#det1_5,#det2_5,#det3_5,#det4_5").html("Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.");
	$("#det1_6,#det2_6,#det3_6,#det4_6").html("Know More");
	
	//Types of Bone Marrow
	$(".typesHeadingDiv").text("What are the types of Bone Marrow Transplant?");
	$(".typesTextList").html("<ul> <li>Autologous Bone Marrow Transplant - Marrow cells are collected from the patient's own body and transfused back after high dose chemotherapy.</li>  <li>Allogenic Bone Marrow Transplant (Matched Sibling Donor) - Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched sibling donor. </li>  <li>Allogenic Bone Marrow Transplant (Matched Unrelated Donor) - Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched donor obtained from bone marrow registries in India and abroad.</li> <li> Haplo-Identical Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from the parent.</li><li> Umbilical cord Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched umbilical cord donor obtained from umbilical cord registries in India and abroad.</li></ul>");

	//Immune Deficiency
	$(".immuneHeading").text("The warning signs of Immune deficiency");
	$("#immuneTxt_1").text("Failure to thrive - not gaining weight and height as per the age norms");
	$("#immuneTxt_2").text("Infections warranting multiple hospitalizations");
	$("#immuneTxt_3").text("Requirement of intravenous antibiotics to clear infections");
	$("#immuneTxt_4").text("2 or more episodes of pneumonia");
	$("#immuneTxt_5").text("Family history of death of children at young age due to immune deficiency");
	$("#immuneTxt_6").text("Repeated episodes of diarrhea");
	$("#immuneTxt_7").text("2 or more episodes of sinus infections within a year");
	$("#immuneTxt_8").text("2 or more episodes of ear discharge");
	$("#immuneTxt_9").text("Repeated skin infections");
	$("#immuneTxt_10").text("Repeated abscess formation (liver abscess, brain abscess)");

	//conditions
	$("#conTxt_1").text("What are the conditions that require Bone Marrow Transplant?");
	$("#conTxtDiv_2").html("<ul> <li>BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders.</li><li> It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas</li></ul>");
	$("#conTxt_2").text("Which are the hematological diseases that may benefit from bone marrow transplants?");
	$("#conTxt_3").text("Which are the Cancers that may benefit from bone marrow transplants?");
	$("#conTxt_4").text("Do bone marrow failure syndromes require BMT?");
	$("#conTxt_5").text("What are Primary Immune Deficiency diseases ?");
	$("#conTxt_6").text("Which are the immune deficiencies that warrant BMT?");
	$("#conTxt_7").text("What makes transplants at Aster CMI unique?");

	// Testimony
	$(".testimonyHeading").text("Testimonials");
	$(".textCls1").text("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.");
	$("#testdet1_3,#testdet2_3,#testdet3_3").html("John Doe");
	$("#testdet1_4,#testdet2_4,#testdet3_4").html("Softwere Engineer");
	$("#testdet1_5,#testdet2_5,#testdet3_5").html("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.");
	
	// Footer
	$(".copyRight").html("Aster CMI. All Rights Reserved");
	
}



