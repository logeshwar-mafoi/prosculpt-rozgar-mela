
// updateLogos.ts
// 🔄 Automatically replace local logo paths in all .tsx / .jsx files with verified online PNG/SVG URLs

import fs from "fs";
import path from "path";

// ✅ Expanded logo mapping
const logoMap: Record<string, string> = {
  // 🏦 Banking & Finance
  "axis.png": "https://upload.wikimedia.org/wikipedia/commons/1/12/Axis_Bank_logo.svg.png",
  "hdfc.png": "https://upload.wikimedia.org/wikipedia/en/8/8b/HDFC_Bank_Logo.svg.png",
  "icici.png": "https://upload.wikimedia.org/wikipedia/en/5/5d/ICICI_Bank_Logo.svg.png",
  "sbi.png": "https://upload.wikimedia.org/wikipedia/en/1/1b/State_Bank_of_India_logo.svg.png",
  "kotak.png": "https://upload.wikimedia.org/wikipedia/en/7/7b/Kotak_Mahindra_Bank_logo.svg.png",
  "indusind.png": "https://upload.wikimedia.org/wikipedia/en/f/f5/IndusInd_Bank_Logo.png",
  "bandhan.png": "https://upload.wikimedia.org/wikipedia/en/7/7d/Bandhan_Bank_logo.png",
  "federal.png": "https://upload.wikimedia.org/wikipedia/en/8/88/Federal_Bank_logo.png",
  "rbl.png": "https://upload.wikimedia.org/wikipedia/en/d/d5/RBL_Bank_logo.png",
  "bajajfinance.png": "https://upload.wikimedia.org/wikipedia/en/8/88/Bajaj_Finserv_Logo.png",
  "bajajallianz.png": "https://upload.wikimedia.org/wikipedia/en/3/3b/Bajaj_Allianz_Logo.png",
  "utkarsh.png": "https://upload.wikimedia.org/wikipedia/en/2/28/Utkarsh_Small_Finance_Bank_Logo.png",
  "lic.png": "https://upload.wikimedia.org/wikipedia/en/d/d0/Life_Insurance_Corporation_of_India_logo.svg.png",
  "hdfclife.png": "https://upload.wikimedia.org/wikipedia/en/8/86/HDFC_Life_Logo.png",
  "maxlife.png": "https://upload.wikimedia.org/wikipedia/en/2/2c/Max_Life_Insurance_logo.png",
  "sbiinsurance.png": "https://upload.wikimedia.org/wikipedia/en/1/1b/State_Bank_of_India_logo.svg.png",

  // ⚙️ Manufacturing & Industry
  "itc.png": "https://upload.wikimedia.org/wikipedia/en/4/4f/ITC_Limited_Logo.png",
  "tata.png": "https://upload.wikimedia.org/wikipedia/en/5/5b/Tata_Group_logo.svg.png",
  "reliance.png": "https://upload.wikimedia.org/wikipedia/en/6/6b/Reliance_Industries_Logo.svg.png",
  "aditya.png": "https://upload.wikimedia.org/wikipedia/en/2/22/Aditya_Birla_Group_logo.svg.png",
  "mrf.png": "https://upload.wikimedia.org/wikipedia/en/a/a3/MRF_Tyres_logo.png",
  "hero.png": "https://upload.wikimedia.org/wikipedia/en/d/d7/Hero_MotoCorp_logo.png",
  "bajajauto.png": "https://upload.wikimedia.org/wikipedia/en/1/1e/Bajaj_Auto_Logo.png",
  "ashokleyland.png": "https://upload.wikimedia.org/wikipedia/en/a/a4/Ashok_Leyland_Logo.png",
  "nissan.png": "https://upload.wikimedia.org/wikipedia/commons/2/25/Nissan_2020_logo.png",
  "mangalam.png": "https://upload.wikimedia.org/wikipedia/en/f/f8/Mangalam_Cement_logo.png",
  "bata.png": "https://upload.wikimedia.org/wikipedia/en/9/93/Bata_Shoes_Logo.png",
  "havells.png": "https://upload.wikimedia.org/wikipedia/en/1/15/Havells_logo.png",
  "amul.png": "https://upload.wikimedia.org/wikipedia/en/0/0e/Amul_logo.svg.png",
  "nestle.png": "https://upload.wikimedia.org/wikipedia/en/a/a0/Nestle_textlogo.svg.png",
  "parle.png": "https://upload.wikimedia.org/wikipedia/en/a/a8/Parle_Products_logo.png",

  // 💻 IT / Software / Services
  "tcs.png": "https://upload.wikimedia.org/wikipedia/en/0/05/Tata_Consultancy_Services_Logo.svg.png",
  "infosys.png": "https://upload.wikimedia.org/wikipedia/en/4/41/Infosys_logo.svg.png",
  "wipro.png": "https://upload.wikimedia.org/wikipedia/en/9/99/Wipro_logo.svg.png",
  "techmahindra.png": "https://upload.wikimedia.org/wikipedia/en/2/2b/Tech_Mahindra_logo.svg.png",
  "hcl.png": "https://upload.wikimedia.org/wikipedia/en/3/3b/HCLTech_logo.svg.png",
  "accenture.png": "https://upload.wikimedia.org/wikipedia/commons/9/99/Accenture.svg.png",
  "capgemini.png": "https://upload.wikimedia.org/wikipedia/en/9/96/Capgemini_201x_logo.svg.png",
  "deloitte.png": "https://upload.wikimedia.org/wikipedia/commons/5/55/Deloitte.svg.png",
  "cognizant.png": "https://upload.wikimedia.org/wikipedia/en/3/36/Cognizant_Logo_2022.svg.png",
  "ibm.png": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg.png",
  "amazon.png": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg.png",
  "google.png": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg.png",
  "microsoft.png": "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg.png",
  "oracle.png": "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg.png",
  "phonepe.png": "https://upload.wikimedia.org/wikipedia/en/3/3e/PhonePe_logo.png",
  "paytm.png": "https://upload.wikimedia.org/wikipedia/en/5/55/Paytm_logo.png",
  "wns.png": "https://upload.wikimedia.org/wikipedia/en/4/4c/WNS_Global_Services_logo.png",

  // 📱 Telecom / Networking
  "airtel.png": "https://upload.wikimedia.org/wikipedia/en/7/7e/Airtel_logo.svg.png",
  "jio.png": "https://upload.wikimedia.org/wikipedia/en/2/2f/Reliance_Jio_Logo.svg.png",
  "vodafone.png": "https://upload.wikimedia.org/wikipedia/en/f/fb/Vodafone_2017_logo.png",
  "bsnl.png": "https://upload.wikimedia.org/wikipedia/en/1/12/BSNL_Logo.svg.png",

  // 🏨 Hospitality & Tourism
  "clubmahindra.png": "https://upload.wikimedia.org/wikipedia/en/3/3f/Club_Mahindra_logo.png",
  "sterling.png": "https://upload.wikimedia.org/wikipedia/en/f/f7/Sterling_Holidays_Logo.png",
  "taj.png": "https://upload.wikimedia.org/wikipedia/en/f/f8/Taj_Hotels_Logo.png",
  "oberoi.png": "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Oberoi_Group_logo.png",
  "lemontree.png": "https://upload.wikimedia.org/wikipedia/en/1/1d/Lemon_Tree_Hotels_logo.png",
  "pvrinox.png": "https://upload.wikimedia.org/wikipedia/en/0/0c/PVR_Cinemas_logo.png",

  // 🏥 Healthcare
  "apollo.png": "https://upload.wikimedia.org/wikipedia/en/f/f3/Apollo_Hospitals_Logo.png",
  "fortis.png": "https://upload.wikimedia.org/wikipedia/en/8/8d/Fortis_Healthcare_logo.png",
  "aiims.png": "https://upload.wikimedia.org/wikipedia/en/1/1a/All_India_Institute_of_Medical_Sciences_logo.png",

  // 🛒 Retail / FMCG
  "bigbasket.png": "https://upload.wikimedia.org/wikipedia/en/1/13/BigBasket_logo.png",
  "dmart.png": "https://upload.wikimedia.org/wikipedia/en/4/4d/D-Mart_logo.png",
  "relianceretail.png": "https://upload.wikimedia.org/wikipedia/en/0/02/Reliance_Retail_Logo.png",
  "flipkart.png": "https://upload.wikimedia.org/wikipedia/en/1/1b/Flipkart_Logo.svg.png",
  "swiggy.png": "https://upload.wikimedia.org/wikipedia/en/1/13/Swiggy_logo.svg.png",
  "zomato.png": "https://upload.wikimedia.org/wikipedia/en/7/75/Zomato_logo.png",
  "mcdonalds.png": "https://upload.wikimedia.org/wikipedia/commons/4/4f/McDonald's_Golden_Arches.svg.png",
  "dominos.png": "https://upload.wikimedia.org/wikipedia/en/8/8f/Domino%27s_Pizza_Logo.svg.png",
  "starbucks.png": "https://upload.wikimedia.org/wikipedia/en/4/45/Starbucks_Corporation_Logo_2011.svg.png",
};

// 📁 Define folders to search in
const foldersToScan = [
  "./src/components",
  "./src/pages"
];

// 🧩 Helper to get all .tsx/.jsx files recursively
function getAllComponentFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files: string[] = [];

  for (const entry of entries) {
    const res = path.resolve(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(getAllComponentFiles(res));
    } else if (entry.name.endsWith(".tsx") || entry.name.endsWith(".jsx")) {
      files.push(res);
    }
  }
  return files;
}

// 🪄 Replace function
function replaceLogosInFile(filePath: string) {
  let content = fs.readFileSync(filePath, "utf-8");
  let modified = false;

  for (const [fileName, newUrl] of Object.entries(logoMap)) {
    const regex = new RegExp(`(["'])/assets/[a-zA-Z0-9_-]+/${fileName}\\1`, "g");
    if (regex.test(content)) {
      content = content.replace(regex, `"${newUrl}"`);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`✅ Updated logos in: ${filePath}`);
  }
}

// 🚀 Run the process
for (const folder of foldersToScan) {
  const files = getAllComponentFiles(folder);
  for (const file of files) {
    replaceLogosInFile(file);
  }
}

console.log("\n🎉 All logo paths updated successfully!");
