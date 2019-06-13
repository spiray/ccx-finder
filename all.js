"use strict";

/* eslint-disable no-undef */
var digitInput = document.getElementById("three-digits");
var FED = "R";
var hlaGroups = ["0075904", "0075938", "0076000", "0076001", "0076011", "0076014", "0076024", "0076025", "0076038", "0076039", "0076085", "0076132", "0076139", "0076141", "0076147", "0076148", "0076149", "0076151", "0076157", "0076158", "0076163", "0076168", "0076172"];
var resultP = document.getElementById("result");
var groupInput = document.getElementById("group-num"); // Const copy = document.getElementById("copy");

var comm = ["ASL", "AWH", "BAX", "BBB", "BBX", "BDW", "BEO", "BEW", "BFV", "BIQ", "BIR", "BIY", "BIZ", "BJB", "BLF", "BLT", "BNZ", "BVJ", "BVV", "BVY", "BWJ", "BYA", "BYE", "BYX", "BZP", "CBU", "CBZ", "CFS", "CSL", "DCU", "DCW", "DJF", "DJJ", "DMP", "DSX", "DTB", "DUG", "DWK", "DXR", "DYU", "EHO", "EON", "EWS", "EYL", "FEO", "FLP", "FOV", "FWQ", "GUL", "GWB", "HAA", "HAB", "HAC", "HAF", "HAM", "HAQ", "HAX", "HAZ", "HBD", "HBH", "HBK", "HBM", "HBX", "HBY", "HCD", "HCW", "HED", "HEF", "HEN", "HFM", "HFR", "HFW", "HHP", "HHW", "HJN", "HLM", "HLR", "HMB", "HPA", "HPF", "HPR", "HRB", "HSA", "HSD", "HSE", "HSF", "HSG", "HSH", "HSJ", "HSL", "HSQ", "HSU", "HTK", "HUF", "HVD", "HWA", "HWB", "HWE", "HWQ", "HWW", "HXS", "HYB", "IBB", "IIC", "IQZ", "IRA", "ISC", "ISS", "JDJ", "JDU", "JEE", "JEJ", "JFX", "JFY", "JGA", "JGB", "JGD", "JGE", "JGG", "JGH", "JGI", "JGJ", "JGL", "JGM", "JGN", "JGO", "JGP", "JGQ", "JGR", "JGS", "JGT", "JGU", "JGV", "JGW", "JGX", "JGY", "JGZ", "JVK", "JVK", "JVL", "JXW", "KBH", "KDJ", "KDP", "KDQ", "KEC", "KJP", "KKN", "KLX", "KPH", "KPU", "KQD", "KQL", "KQM", "KQS", "KUG", "KUK", "KWH", "KZR", "LDW", "LDY", "LES", "LGV", "LHG", "LKF", "LSH", "LSW", "LWR", "LZU", "MGZ", "MKV", "MKY", "MWJ", "MWK", "NBZ", "NCL", "NDD", "NEB", "NFC", "NFE", "NFW", "NHL", "NHV", "NHX", "NII", "NJD", "NJE", "NJI", "NJO", "NJP", "NJR", "NJS", "NJT", "NJX", "NKG", "NKH", "NKO", "NLD", "NLE", "NLG", "NLS", "NMO", "NMR", "NNI", "NOB", "NOC", "NOD", "NOV", "NPH", "NRQ", "NRW", "NSG", "NSI", "NSJ", "NSK", "NSY", "NTR", "NTW", "NUF", "NUH", "NVP", "NVY", "NYM", "ORN", "ORN", "ORZ", "ORZ", "OUI", "OYC", "OZC", "PFR", "PFZ", "PJY", "PKP", "PUB", "RFW", "RGW", "RJA", "RJU", "RJX", "RKU", "RKX", "RLX", "RQV", "RQV", "RUG", "RWM", "RWX", "RWY", "RXR", "RYJ", "RYJ", "SCV", "SDQ", "SGH", "SGX", "SGZ", "SLQ", "SMJ", "SNJ", "SOV", "SQW", "SRA", "SRD", "SUB", "SUC", "SUX", "SUY", "SUZ", "SXL", "TBG", "TEB", "TGW", "TJU", "TLH", "TMU", "TQL", "TQT", "TQW", "TUL", "TUU", "TUV", "TVV", "TWF", "TWP", "TYN", "TZF", "UAN", "UCJ", "UFD", "UGC", "UGY", "UIX", "UOG", "UOK", "UOQ", "UQW", "URG", "UWT", "UXI", "UXW", "VEG", "VGG", "WAY", "WRC", "WUG", "WUR", "WYE", "YHA", "YHB", "YHD", "YHE", "YHF", "YHG", "YHL", "YHN", "YHO", "YHP", "YHQ", "YHX", "YHY", "YKA", "YKC", "YKE", "YKF", "YKG", "YKH", "YKJ", "YKL", "YKQ", "YKR", "YKS", "YKT", "YKZ"];
var med = ["NJH", "NJN", "YKB", "YKD", "YKI", "YKK", "YKM", "YKO", "YKU"];
var HLA = "ZJC";

function setColor(color) {
  resultP.style.color = color;
  resultP.style.fontSize = "xx-large";
}

function showResult(value) {
  if (comm.includes(value)) {
    resultP.textContent = "Commercial";
  } else if (med.includes(value)) {
    resultP.textContent = "Medicare Advantage";
  } else if (value.startsWith(FED)) {
    resultP.textContent = "Federal";
  } else if (value === HLA) {
    resultP.textContent = "HLA";
  } else {
    resultP.textContent = "Please enter a Group #";
    setColor("#e0a800");
    digitInput.innerHTML = "";
    return false;
  }

  setColor("#228738");
  digitInput.innerHTML = "";
}

function showError() {
  resultP.textContent = "Please enter 1 or 3 charachters...";
  setColor("#c82334");
}

digitInput.addEventListener("change", function (_ref) {
  var value = _ref.target.value;

  switch (value.length) {
    case 1:
      if (value.toUpperCase() === FED) showResult(value.toUpperCase());
      break;

    case 3:
      return showResult(value.toUpperCase());

    default:
      return showError();
  }
});
groupInput.addEventListener("change", function (_ref2) {
  var value = _ref2.target.value;
  if (hlaGroups.includes(value)) resultP.textContent = "HLA";else resultP.textContent = "Out of State";
  setColor("#228738");
}); // eslint-disable-next-line no-new

new ClipboardJS(".btn");
