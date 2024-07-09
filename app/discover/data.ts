export type Mutation = {
  name: string;
  description: string;
};

export const yearApproved = [22, 14, 12, 11, 16, 19, 23, 19, 19, 33, 22, 31, 33, 49, 108, 58, 41, 45, 31]; // start 2006 end 2024
// accumulative 22, 36, 48, 59, 75, 94, 117, 136, 155, 188, 210, 241, 274, 323, 431, 489, 530, 575, 606
export const accyearApproved = yearApproved.map((d, i) => yearApproved.slice(0, i + 1).reduce((a, b) => a + b, 0));
console.log(yearApproved, accyearApproved)

export const mutations: Mutation[] = [
  {
    name: "Deletion",
    description:
      "A deletion mutation is a type of mutation in which a part of the chromosome is lost.",
  },
  {
    name: "Duplication",
    description:
      "A duplication mutation is a type of mutation in which a part of the chromosome is copied.",
  },
  {
    name: "Insertion",
    description:
      "An insertion mutation is a type of mutation in which a part of the chromosome is added.",
  },
  {
    name: "Inversion",
    description:
      "An inversion mutation is a type of mutation in which a part of the chromosome is reversed.",
  },
  {
    name: "Deletion",
    description:
      "A deletion mutation is a type of mutation in which a part of the chromosome is lost.",
  },
  {
    name: "Duplication",
    description:
      "A duplication mutation is a type of mutation in which a part of the chromosome is copied.",
  },
  {
    name: "Insertion",
    description:
      "An insertion mutation is a type of mutation in which a part of the chromosome is added.",
  },
  {
    name: "Inversion",
    description:
      "An inversion mutation is a type of mutation in which a part of the chromosome is reversed.",
  },
  {
    name: "Deletion",
    description:
      "A deletion mutation is a type of mutation in which a part of the chromosome is lost.",
  },
  {
    name: "Duplication",
    description:
      "A duplication mutation is a type of mutation in which a part of the chromosome is copied.",
  },
  {
    name: "Insertion",
    description:
      "An insertion mutation is a type of mutation in which a part of the chromosome is added.",
  },
  {
    name: "Inversion",
    description:
      "An inversion mutation is a type of mutation in which a part of the chromosome is reversed.",
  },
  {
    name: "Deletion",
    description:
      "A deletion mutation is a type of mutation in which a part of the chromosome is lost.",
  },
  {
    name: "Duplication",
    description:
      "A duplication mutation is a type of mutation in which a part of the chromosome is copied.",
  },
  {
    name: "Insertion",
    description:
      "An insertion mutation is a type of mutation in which a part of the chromosome is added.",
  },
  {
    name: "Inversion",
    description:
      "An inversion mutation is a type of mutation in which a part of the chromosome is reversed.",
  },
];

export type Treatment = {
  type: "Preffered" | "Alternative" | "Experimental";
  name: string;
  description: string;
};

export const treatments: Treatment[] = [
  {
    type: "Preffered",
    name: "Chemotherapy",
    description:
      "Chemotherapy is a type of cancer treatment that uses drugs to kill cancer cells.",
  },
  {
    type: "Preffered",
    name: "Radiation Therapy",
    description:
      "Radiation therapy is a type of cancer treatment that uses high doses of radiation to kill cancer cells and shrink tumors.",
  },
  {
    type: "Preffered",
    name: "Surgery",
    description:
      "Surgery is a type of cancer treatment that involves removing the tumor and some of the surrounding tissue.",
  },
  {
    type: "Preffered",
    name: "Immunotherapy",
    description:
      "Immunotherapy is a type of cancer treatment that helps your immune system fight cancer.",
  },
  {
    type: "Preffered",
    name: "Targeted Therapy",
    description:
      "Targeted therapy is a type of cancer treatment that targets the changes in cancer cells that help them grow, divide, and spread.",
  },
  {
    type: "Preffered",
    name: "Hormone Therapy",
    description:
      "Hormone therapy is a type of cancer treatment that slows or stops the growth of cancer that uses hormones to grow.",
  },
  {
    type: "Preffered",
    name: "Stem Cell Transplant",
    description:
      "Stem cell transplant is a type of cancer treatment that replaces blood-forming stem cells.",
  },
  {
    type: "Preffered",
    name: "Chemotherapy",
    description:
      "Chemotherapy is a type of cancer treatment that uses drugs to kill cancer cells.",
  },
  {
    type: "Preffered",
    name: "Radiation Therapy",
    description:
      "Radiation therapy is a type of cancer treatment that uses high doses of radiation to kill cancer cells and shrink tumors.",
  },
  {
    type: "Preffered",
    name: "Surgery",
    description:
      "Surgery is a type of cancer treatment that involves removing the tumor and some of the surrounding tissue.",
  },
  {
    type: "Preffered",
    name: "Immunotherapy",
    description:
      "Immunotherapy is a type of cancer treatment that helps your immune system fight cancer.",
  },
  {
    type: "Preffered",
    name: "Targeted Therapy",
    description:
      "Targeted therapy is a type of cancer treatment that targets the changes in cancer cells that help them grow, divide, and spread.",
  },
  {
    type: "Preffered",
    name: "Hormone Therapy",
    description:
      "Hormone therapy is a type of cancer treatment that slows or stops the growth of cancer that uses hormones to grow.",
  },
  {
    type: "Preffered",
    name: "Stem Cell Transplant",
    description:
      "Stem cell transplant is a type of cancer treatment that replaces blood-forming stem cells.",
  },
  {
    type: "Alternative",
    name: "Chemotherapy",
    description:
      "Chemotherapy is a type of cancer treatment that uses drugs to kill cancer cells.",
  },
  {
    type: "Alternative",
    name: "Radiation Therapy",
    description:
      "Radiation therapy is a type of cancer treatment that uses high doses of radiation to kill cancer cells and shrink tumors.",
  },
  {
    type: "Alternative",
    name: "Surgery",
    description:
      "Surgery is a type of cancer treatment that involves removing the tumor and some of the surrounding tissue.",
  },
  {
    type: "Alternative",
    name: "Immunotherapy",
    description:
      "Immunotherapy is a type of cancer treatment that helps your immune system fight cancer.",
  },
  {
    type: "Alternative",
    name: "Targeted Therapy",
    description:
      "Targeted therapy is a type of cancer treatment that targets the changes in cancer cells that help them grow, divide, and spread.",
  },
  {
    type: "Alternative",
    name: "Hormone Therapy",
    description:
      "Hormone therapy is a type of cancer treatment that slows or stops the growth of cancer that uses hormones to grow.",
  },
  {
    type: "Alternative",
    name: "Stem Cell Transplant",
    description:
      "Stem cell transplant is a type of cancer treatment that replaces blood-forming stem cells.",
  },
  {
    type: "Experimental",
    name: "Chemotherapy",
    description:
      "Chemotherapy is a type of cancer treatment that uses drugs to kill cancer cells.",
  },
  {
    type: "Experimental",
    name: "Radiation Therapy",
    description:
      "Radiation therapy is a type of cancer treatment that uses high doses of radiation to kill cancer cells and shrink tumors.",
  },
  {
    type: "Experimental",
    name: "Surgery",
    description:
      "Surgery is a type of cancer treatment that involves removing the tumor and some of the surrounding tissue.",
  },
  {
    type: "Experimental",
    name: "Immunotherapy",
    description:
      "Immunotherapy is a type of cancer treatment that helps your immune system fight cancer.",
  },
  {
    type: "Experimental",
    name: "Targeted Therapy",
    description:
      "Targeted therapy is a type of cancer treatment that targets the changes in cancer cells that help them grow, divide, and spread.",
  },
  {
    type: "Experimental",
    name: "Hormone Therapy",
    description:
      "Hormone therapy is a type of cancer treatment that slows or stops the growth of cancer that uses hormones to grow.",
  },
  {
    type: "Experimental",
    name: "Stem Cell Transplant",
    description:
      "Stem cell transplant is a type of cancer treatment that replaces blood-forming stem cells.",
  },
];

export type CancerType = {
  name: string;
  image: string;
  organ: string;
};

export const cancerTypes: CancerType[] = [
  {
    name: "Adrenal Cancer",
    image: "https://baconmockup.com/600/400",
    organ: "Adrenal Glands",
  },
  {
    name: "Bile Duct Cancer",
    image: "https://baconmockup.com/601/400",
    organ: "Bile Ducts",
  },
  {
    name: "Bladder Cancer",
    image: "https://baconmockup.com/602/400",
    organ: "Bladder",
  },
  {
    name: "Bone Cancer",
    image: "https://baconmockup.com/603/400",
    organ: "Bones",
  },
  {
    name: "Brain Cancer",
    image: "https://baconmockup.com/604/400",
    organ: "Brain",
  },
  {
    name: "Breast Cancer",
    image: "https://baconmockup.com/605/400",
    organ: "Breast",
  },
  {
    name: "Cervical Cancer",
    image: "https://baconmockup.com/606/400",
    organ: "Cervix",
  },
  {
    name: "Colon Cancer",
    image: "https://baconmockup.com/607/400",
    organ: "Colon",
  },
  {
    name: "Colorectal Cancer",
    image: "https://baconmockup.com/608/400",
    organ: "Colon and Rectum",
  },
  {
    name: "Endometrial Cancer",
    image: "https://baconmockup.com/609/400",
    organ: "Endometrium",
  },
  {
    name: "Esophageal Cancer",
    image: "https://baconmockup.com/610/400",
    organ: "Esophagus",
  },
  {
    name: "Eye Cancer",
    image: "https://baconmockup.com/611/400",
    organ: "Eye",
  },
  {
    name: "Gallbladder Cancer",
    image: "https://baconmockup.com/612/400",
    organ: "Gallbladder",
  },
  {
    name: "Gastric Cancer",
    image: "https://baconmockup.com/613/400",
    organ: "Stomach",
  },
  {
    name: "Head and Neck Cancer",
    image: "https://baconmockup.com/614/400",
    organ: "Head and Neck",
  },
  {
    name: "Hodgkin Lymphoma",
    image: "https://baconmockup.com/615/400",
    organ: "Lymphatic System",
  },
  {
    name: "Kidney Cancer",
    image: "https://baconmockup.com/616/400",
    organ: "Kidneys",
  },
  {
    name: "Laryngeal Cancer",
    image: "https://baconmockup.com/617/400",
    organ: "Larynx",
  },
  {
    name: "Leukemia",
    image: "https://baconmockup.com/618/400",
    organ: "Blood and Bone Marrow",
  },
  {
    name: "Liver Cancer",
    image: "https://baconmockup.com/619/400",
    organ: "Liver",
  },
  {
    name: "Lung Cancer",
    image: "https://baconmockup.com/620/400",
    organ: "Lungs",
  },
  { name: "Melanoma", image: "https://baconmockup.com/621/400", organ: "Skin" },
  {
    name: "Mesothelioma",
    image: "https://baconmockup.com/622/400",
    organ: "Mesothelium",
  },
  {
    name: "Multiple Myeloma",
    image: "https://baconmockup.com/623/400",
    organ: "Bone Marrow",
  },
  {
    name: "Neuroblastoma",
    image: "https://baconmockup.com/624/400",
    organ: "Adrenal Glands",
  },
  {
    name: "Non-Hodgkin Lymphoma",
    image: "https://baconmockup.com/625/400",
    organ: "Lymphatic System",
  },
  {
    name: "Oral Cancer",
    image: "https://baconmockup.com/626/400",
    organ: "Mouth",
  },
  {
    name: "Ovarian Cancer",
    image: "https://baconmockup.com/627/400",
    organ: "Ovaries",
  },
  {
    name: "Pancreatic Cancer",
    image: "https://baconmockup.com/628/400",
    organ: "Pancreas",
  },
  {
    name: "Penile Cancer",
    image: "https://baconmockup.com/629/400",
    organ: "Penis",
  },
  {
    name: "Prostate Cancer",
    image: "https://baconmockup.com/630/400",
    organ: "Prostate",
  },
  {
    name: "Rectal Cancer",
    image: "https://baconmockup.com/631/400",
    organ: "Rectum",
  },
  {
    name: "Sarcoma",
    image: "https://baconmockup.com/632/400",
    organ: "Connective Tissues",
  },
  {
    name: "Skin Cancer",
    image: "https://baconmockup.com/633/400",
    organ: "Skin",
  },
  {
    name: "Small Intestine Cancer",
    image: "https://baconmockup.com/634/400",
    organ: "Small Intestine",
  },
  {
    name: "Soft Tissue Sarcoma",
    image: "https://baconmockup.com/635/400",
    organ: "Soft Tissues",
  },
  {
    name: "Stomach Cancer",
    image: "https://baconmockup.com/636/400",
    organ: "Stomach",
  },
  {
    name: "Testicular Cancer",
    image: "https://baconmockup.com/637/400",
    organ: "Testicles",
  },
  {
    name: "Throat Cancer",
    image: "https://baconmockup.com/638/400",
    organ: "Throat",
  },
  {
    name: "Thyroid Cancer",
    image: "https://baconmockup.com/639/400",
    organ: "Thyroid Gland",
  },
  {
    name: "Uterine Cancer",
    image: "https://baconmockup.com/640/400",
    organ: "Uterus",
  },
  {
    name: "Vaginal Cancer",
    image: "https://baconmockup.com/641/400",
    organ: "Vagina",
  },
  {
    name: "Vulvar Cancer",
    image: "https://baconmockup.com/642/400",
    organ: "Vulva",
  },
];

export const stages = [
  {
    stage: "I",
    description:
      "Stage 1 is the earliest stage of cancer. It is usually small and hasn’t spread to other parts of the body. It is often called early-stage cancer.",
  },

  {
    stage: "II",
    description:
      "Stage 2 means the cancer has grown, but it is still contained in the organ where it started. It has not spread to other parts of the body.",
  },

  {
    stage: "III",
    description:
      "Stage 3 means the cancer has spread to nearby tissues or lymph nodes. It may have also spread to other parts of the body.",
  },

  {
    stage: "IV",
    description:
      "Stage 4 means the cancer has spread to other parts of the body. It is also called advanced or metastatic cancer.",
  },
];
