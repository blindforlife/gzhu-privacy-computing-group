// color = { processing, success, error, warning, magenta, red, volcano, orange, gold, lime, green, cyan, blue, geekblue, purple }
import { TAGS } from '@/utils/tags.js'
export const pageBanner = {
  title: '研究成果',
  desc: '关于研究成果的介绍性文字'
}

export const ABBR = {
  NDSS: '#2db7f5',
  TOPS: '#87d068',
  TIFS: '#108ee9'
}

export const publications = [
  {
    year: '2024',
    title: 'Secret-Shared Shuffle with Malicious Security',
    writer: 'Xiangfu Song, Dong Yin, Jianli Bai,  Changyu Dong, and Ee-Chien Chang',
    subtitle: 'In 31st Annual Network and Distributed System Security Symposium (NDSS 2024), 2024',
    abbr: 'NDSS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/ndss24.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://eprint.iacr.org/2023/1794'
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2024',
    title: 'Sphinx-in-the-Head: Group Signatures from Symmetric Primitives',
    writer: 'Liqun Chen,  Changyu Dong, Christopher J. P. Newton, and Yalan Wang',
    subtitle: 'ACM Trans. Priv. Secur., 2024',
    abbr: 'TOPS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/tops24.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://dl.acm.org/doi/10.1145/3638763'
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2024',
    title: 'Distributed Differential Privacy via Shuffling Versus Aggregation: A Curious Study',
    writer: 'Yu Wei, Jingyu Jia, Yuduo Wu, Changhui Hu,  Changyu Dong, Zheli Liu, Xiaofeng Chen, Yun Peng, and Shaowei Wang',
    subtitle: 'IEEE Trans. Inf. Forensics Secur., 2024',
    abbr: 'TIFS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/tifs24a.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://ieeexplore.ieee.org/document/10387292'
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2024',
    title: 'Toward Universal Detection of Adversarial Examples via Pseudorandom Classifiers',
    writer: 'Boyu Zhu,  Changyu Dong, Yuan Zhang, Yunlong Mao, and Sheng Zhong',
    subtitle: 'IEEE Trans. Inf. Forensics Secur., 2024',
    abbr: 'TIFS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/tifs24b.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://ieeexplore.ieee.org/document/10348609'
      }
    ],
    labels: ['label 2', 'label 3']
  },
  {
    year: '2024',
    title: 'Defenses to Membership Inference Attacks: A Survey',
    writer: 'Li Hu, Anli Yan, Hongyang Yan, Jin Li, Teng Huang, Yingying Zhang,  Changyu Dong, and Chunsheng Yang',
    subtitle: 'ACM Comput. Surv., 2024',
    abbr: 'ACM',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/csur24.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1145/3620667'
      }
    ],
    labels: ['label 2', 'label 3']
  },
  {
    year: '2024',
    title: 'ChatGraph: Chat with Your Graphs',
    writer: 'Yun Peng, Sen Lin, Qian Chen, Shaowei Wang, Lyu Xu, Xiaojun Ren, Yafei Li, Jianliang Xu',
    subtitle: 'IEEE International Conference on Data Engineering(ICDE)，2024',
    abbr: 'ICDE',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/'
      },
      {
        ...TAGS.html,
        url: ''
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2024',
    title: 'Privacy Amplification via Shuffling: Unified, Simplified, and Tightened',
    writer: 'Shaowei Wang, Yun Peng, Jin Li, Zikai Wen, Zhipeng Li, Shiyu Yu, Di Wang, Wei Yang',
    subtitle: '.Proceedings of the International Conference on Very Large Data Bases (VLDB), 2024 ',
    abbr: 'VLDB',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/'
      },
      {
        ...TAGS.html,
        url: ''
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2024',
    title: 'Optimal Locally Private Data Stream Analytics',
    writer: 'Shaowei Wang, Yun Peng, Kongyang Chen, Wei Yang',
    subtitle: 'IEEE International Conference on Computer Communications(INFOCOM) ,2024',
    abbr: 'INFOCOM',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/'
      },
      {
        ...TAGS.html,
        url: ''
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2024',
    title: 'Differentially Private Numerical Vector Analyses in the Local and Shuffle Model',
    writer: 'Shaowei Wang, Jin Li, Yuntong Li, Jin Li, Wei Yang, Hongyang Yan',
    subtitle: 'IEEE Transactions on Dependable and Secure Computing (TDSC). IEEE, 2024',
    abbr: 'TDSC',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/'
      },
      {
        ...TAGS.html,
        url: ''
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2024',
    title: 'Security and Privacy Issues in Deep Reinforcement Learning: Threats and Countermeasures',
    writer: 'Kanghua Mo, Peigen Ye, Xiaojun Ren, Shaowei Wang, Wenjun Li, Jin Li',
    subtitle: 'ACM Computing Surveys. ACM, 2024',
    abbr: 'CSUR',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/csur24b.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1145/3640312'
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2024',
    title: 'GenSeg: On Generating Unified Adversary for Segmentation',
    writer: 'Yuxuan Zhang, Zhenbo Shi, Wei Yang, Shuchang Wang, Shaowei Wang, Yinxing Xue',
    subtitle: 'The 33rd International Joint Conference on Artificial Intelligence (IJCAI). 2024',
    abbr: 'IJCAI',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/'
      },
      {
        ...TAGS.html,
        url: ''
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2024',
    title: 'ARES: On Adversarial Robustness Enhancement for Image Steganographic Cost Learning',
    writer: 'Qi Cui, Zhili Zhou, Ruohan Meng, Shaowei Wang, Hongyang Yan, Q. M. Jonathan Wu',
    subtitle: 'IEEE Transactions on Multimedia (TMM). IEEE, 2024',
    abbr: 'TMM',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/tmm24.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1109/TMM.2024.3353543'
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2024',
    title: 'DPGazeSynth: Enhancing Eye-tracking Virtual Reality Privacy with Differentially Private Data Synthesis',
    writer: 'Xiaojun Ren, Jiluan Fan, Ning Xu, Shaowei Wang, Changyu Dong, Zikai Wen',
    subtitle: 'Information Sciences, 2024',
    abbr: 'IS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/is24.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1016/j.ins.2024.120720'
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2024',
    title: '',
    writer: '',
    subtitle: '',
    abbr: 'NDSS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/'
      },
      {
        ...TAGS.html,
        url: ''
      }
    ],
    labels: ['label 1', 'label 2']
  },

  {
    year: '2023',
    title: 'Hash-Based Direct Anonymous Attestation',
    writer: 'Liqun Chen,  Changyu Dong, Nada El Kassem, Christopher J. P. Newton, and Yalan Wang',
    subtitle: 'In 14th International Symposium on Post-Quantum Cryptography (PQCrypto 2023), 2023',
    abbr: 'PQCrypto',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/pqcrypto23.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1007/978-3-031-40003-2_21'
      }
    ],
    labels: ['label 2', 'label 3']
  },
  {
    year: '2023',
    title: 'Boost Off/On-Manifold Adversarial Robustness for Deep Learning with Latent Representation Mixup',
    writer: 'Mengdie Huang, Yi Xie, Xiaofeng Chen, Jin Li,  Changyu Dong, Zheli Liu, and Willy Susilo',
    subtitle: 'In 2023 ACM Asia Conference on Computer and Communications Security (AsiaCCS 2023), 2023',
    abbr: 'AsiaCCS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/asiaccs23.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://dl.acm.org/doi/10.1145/3579856.3595786'
      }
    ],
    labels: ['label 2', 'label 3']
  },
  {
    year: '2023',
    title: 'The influence of explanation designs on user understanding differential privacy and making data-sharing decision',
    writer: 'Zikai Alex Wen, Jingyu Jia, Hongyang Yan, Yaxing Yao, Zheli Liu, and Changyu Dong',
    subtitle: 'Information Sciences, 2023',
    abbr: 'Inf. Sci.',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/InformationSciences23c.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1016/j.ins.2023.03.024'
      }
    ],
    labels: ['label 3', 'label 4']
  },
  {
    year: '2023',
    title: 'Explanation leaks: Explanation-guided model extraction attacks',
    writer: 'Anli Yan, Teng Huang, Lishan Ke, Xiaozhang Liu, Qi Chen, and Changyu Dong',
    subtitle: 'Information Sciences, 2023',
    abbr: 'Inf. Sci.',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/InformationSciences23b.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1016/j.ins.2023.03.020'
      }
    ],
    labels: ['label 3', 'label 4']
  },
  {
    year: '2023',
    title: 'Total variation distance privacy: Accurately measuring inference attacks and improving utility',
    writer: 'Jingyu Jia, Chang Tan, Zhewei Liu, Xinhao Li, Zheli Liu, Siyi Lv, and Changyu Dong',
    subtitle: 'Information Sciences, 2023',
    abbr: 'Inf. Sci.',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/InformationSciences23a.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1016/j.ins.2023.01.037'
      }
    ],
    labels: ['label 3', 'label 4']
  },
  {
    year: '2023',
    title: 'Predicate Private Set Intersection with Linear Complexity',
    writer: 'Yaxi Yang, Jian Weng, Yufeng Yi,  Changyu Dong, Leo Yu Zhang, and Jianying Zhou',
    subtitle: 'In 21st International Conference on Applied Cryptography and Network Security (ACNS 2023), 2023',
    abbr: 'ACNS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/ACNS23.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1007/978-3-031-33491-7_6'
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2023',
    title: 'Zero-Knowledge Multi-transfer Based on Range Proofs and Homomorphic Encryption',
    writer: 'Emanuele Scala,  Changyu Dong, Flavio Corradini, and Leonardo Mostarda',
    subtitle: 'In 37th International Conference on Advanced Information Networking and Applications (AINA-2023), 2023',
    abbr: 'AINA',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/AINA23.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1007/978-3-031-28451-9_41'
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2023',
    title: 'Efficient Approximate Nearest Neighbor Search in Multi-dimensional Databases',
    writer: 'Yun Peng, Byron Choi, Tsz Nam Chan, Jianye Yang, Jianliang Xu',
    subtitle: 'ACM International Conference on Management of Data (SIGMOD), 2023',
    abbr: 'SIGMOD',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/sigmod23a.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1145/3588908'
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2023',
    title: 'A Framework for Privacy Preserving Localized Graph Pattern Query Processing',
    writer: 'Lyu Xu, Byron Choi, Yun Peng, Jianliang Xu, Sourav S. Bhowmick',
    subtitle: 'ACM International Conference on Management of Data (SIGMOD),  2023',
    abbr: 'SIGMOD',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/sigmod23b.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://dl.acm.org/doi/abs/10.1145/3589274'
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2023',
    title: '(p,q)-Biclique Counting and Enumeration for Large Sparse Bipartite Graphs',
    writer: 'Jianye Yang, Yun Peng, Dian Ouyang, Wenjie Zhang, Xuemin Lin, Xiang Zhao',
    subtitle: 'VLDB Journal (VLDBJ),  2023, ',
    abbr: 'VLDBJ',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/vldbj23.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1007/s00778-023-00786-0 '
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2023',
    title: 'Auction-based Crowdsourced First and Last Mile Logistics',
    writer: 'Yafei Li, Yifei Li, Yun Peng, Xiaoyi Fu, Jianliang Xu, Mingliang Xu',
    subtitle: 'IEEE Transactions on Mobile Computing (TMC), 2023',
    abbr: 'TMC',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/tmc23.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1109/TMC.2022.3219881'
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2023',
    title: 'Locally Private Set-valued Data Analyses: Distribution and Heavy Hitters Estimation',
    writer: 'Shaowei Wang, Yuntong Li, Yusen Zhong, Kongyang Chen, Xianmin Wang, Zhili Zhou, Fei Peng, Yuqiu Qian, Jiachun Du, Wei Yang',
    subtitle: 'IEEE Transactions on Mobile Computing (TMC). IEEE, 2023',
    abbr: 'TMC',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/tmc23b.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1109/TMC.2023.3342056'
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2023',
    title: 'Shuffle Differential Private Data Aggregation for Random Population',
    writer: 'Shaowei Wang, Xuandi Luo, Yuqiu Qian, Youwen Zhu, Kongyang Chen, Qi Chen, Bangzhou Xin, Wei Yang',
    subtitle: 'IEEE Transactions on Parallel and Distributed Systems (TPDS). IEEE, 2023',
    abbr: 'TPDS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/tpds23.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1109/TPDS.2023.3247541'
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2023',
    title: 'Fine-grained Private Knowledge Distillation',
    writer: 'Yuntong Li, Shaowei Wang, Yingying Wang, Jin Li, Yuqiu Qian, Bangzhou Xin, Wei Yang',
    subtitle: '2023 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP).IEEE 2023',
    abbr: 'ICASSP',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/icassp23.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1109/ICASSP49357.2023.10094822'
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2023',
    title: 'FirewaLLM: A Portable Data Protection and Recovery Framework for LLM Services',
    writer: 'Bin Huang, Shiyu Yu, Jin Li, Yuyang Chen, Shaozheng Huang, Sufen Zeng, Shaowei Wang',
    subtitle: 'International Conference on Data Mining and Big Data. Singapore: Springer Nature Singapore, 2023',
    abbr: 'DMBD',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/dmdb23.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1007/978-981-97-0844-4_2'
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2023',
    title: '',
    writer: '',
    subtitle: '',
    abbr: '',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/'
      },
      {
        ...TAGS.html,
        url: ''
      }
    ],
    labels: ['label 1', 'label 2']
  },

  {
    year: '2022',
    title: 'Understanding adaptive gradient clipping in DP-SGD, empirically',
    writer: 'Guanbiao Lin, Hongyang Yan, Guang Kou, Teng Huang, Shiyu Peng, Yingying Zhang, and Changyu Dong',
    subtitle: 'Int. J. Intell. Syst., 2022',
    abbr: 'IJIS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/lin.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1002/int.23001'
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2022',
    title: 'GAME: Generative-Based Adaptive Model Extraction Attack',
    writer: 'Yi Xie, Mengdie Huang, Xiaoyu Zhang,  Changyu Dong, Willy Susilo, and Xiaofeng Chen',
    subtitle: 'In 27th European Symposium on Research in Computer Security Computer Security (ESORICS 2022), 2022',
    abbr: 'ESORICS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/ESORICS22.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://link.springer.com/chapter/10.1007/978-3-031-17140-6_28'
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2022',
    title: 'New Differential Privacy Communication Pipeline and Design Framework (Poster)',
    writer: 'Jingyu Jia, Zikai Wen, Zheli Liu, and Changyu Dong',
    subtitle: 'In 18th Symposium on Usable Privacy and Security (SOUPS 2022), 2022',
    abbr: 'SOUPS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/SOUPS22.pdf'
      },
      {
        ...TAGS.html,
        url: ''
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2022',
    title: 'Defending against Membership Inference Attacks with High Utility by GAN',
    writer: 'Li Hu, Jin Li, Guanbiao Lin, Shiyu Peng, Zhenxin Zhang, Yingying Zhang, and Changyu Dong',
    subtitle: 'IEEE Trans. Dependable Secur. Comput., 2022',
    abbr: 'TDSC',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/TDSC22.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1109/TDSC.2022.3174569'
      }
    ],
    labels: ['label 4']
  },  
  {
    year: '2022',
    title: 'Differentially Private Byzantine-robust Federated Learning',
    writer: 'Xu Ma, Xiaoqian Sun, Yuduo Wu, Zheli Liu, Xiaofeng Chen, and Changyu Dong',
    subtitle: 'IEEE Trans. Parallel Distributed Syst., 2022',
    abbr: 'TPDS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/TPDS22.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1109/TPDS.2022.3167434'
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2022',
    title: 'Multi-party Updatable Delegated Private Set Intersection',
    writer: 'Aydin Abadi,  Changyu Dong, Steven Murdoch, and Sotirios Terzis',
    subtitle: 'In 26th International Conference on Financial Cryptography and Data Security, 2022',
    abbr: 'FC',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/fc22.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://link.springer.com/chapter/10.1007/978-3-031-18283-9_6'
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2022',
    title: 'LAN: Learning-based Approximate k-Nearest Neighbor Search in Graph Databases',
    writer: 'Yun Peng, Byron Choi, Tsz Nam Chan, Jianliang Xu',
    subtitle: 'Proceedings of the IEEE International Conference on Data Engineering (ICDE), 2022',
    abbr: 'ICDE',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/icde22.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1109/ICDE53745.2022.00233'
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2022',
    title: '(p,q)-Biclique Counting and Enumeration for Large Sparse Bipartite Graphs',
    writer: 'Jianye Yang, Yun Peng, Wenjie Zhang',
    subtitle: 'Proceedings of the International Conference on Very Large Data Bases (VLDB), 2022',
    abbr: 'VLDB',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/vldb22.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.14778/3489496.3489497'
      }
    ],
    labels: ['label 1', 'label 2']
  },
  
  {
    year: '2022',
    title: 'Federated synthetic data generation with differential privacy',
    writer: 'Bangzhou Xin, Yangyang Geng, Teng Hu, Sheng Chen, Wei Yang, Shaowei Wang, Liusheng Huang',
    subtitle: 'Neurocomputing, 2022',
    abbr: 'IJON',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/ijon22.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1016/j.neucom.2021.10.027'
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2022',
    title: 'DPCL: Contrastive representation learning with differential privacy',
    writer: 'Wenjun Li, Anli Yan, Di Wu, Taoyu Zhu, Teng Huang, Xuandi Luo, Shaowei Wang',
    subtitle: 'International Journal of Intelligent Systems, 2022',
    abbr: 'IJIS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/ijis22.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1002/int.23002'
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2022',
    title: 'Analyzing Preference Data with Local Privacy: Optimal Utility and Enhanced Robustness',
    writer: 'Shaowei Wang, Xuandi Luo, Yuqiu Qian, Jiachun Du, Wenqing Lin, Wei Yang',
    subtitle: 'IEEE Transactions on Knowledge and Data Engineering (TKDE). IEEE, 2022',
    abbr: 'TKDE',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/tkde22.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1109/TKDE.2022.3207486'
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2022',
    title: '',
    writer: '',
    subtitle: '',
    abbr: 'NDSS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/'
      },
      {
        ...TAGS.html,
        url: ''
      }
    ],
    labels: ['label 1', 'label 2']
  },

  {
    year: '2021',
    title: 'Cetus: an efficient symmetric searchable encryption against file-injection attack with SGX',
    writer: 'Yanyu Huang, Siyi Lv, Zheli Liu, Xiangfu Song, Jin Li, Yali Yuan, and Changyu Dong',
    subtitle: 'Sci. China Inf. Sci., 2021',
    abbr: 'Sci. China Inf. Sci.',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/scichina21.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1007/s11432-020-3039-x'
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2021',
    title: 'Differentially Private String Sanitization for Frequency-Based Mining Tasks',
    writer: 'Huiping Chen,  Changyu Dong, Liyue Fan, Grigorios Loukides, Solon P. Pissis, and Leen Stougie',
    subtitle: 'In IEEE International Conference on Data Mining, 2021',
    abbr: 'ICDM',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/icdm21.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1109/ICDM51629.2021.00014'
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2021',
    title: 'How to Make Private Distributed Cardinality Estimation Practical, and Get Differential Privacy for Free',
    writer: 'Changhui Hu, Jin Li, Zheli Liu, Xiaojie Guo, Yu Wei, Xuan Guang, Grigorios Loukides, and Changyu Dong',
    subtitle: 'In 30th USENIX Security Symposium, 2021',
    abbr: 'USENIX',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/USENIX_21_FULL.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://www.usenix.org/conference/usenixsecurity21/presentation/hu-changhui'
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2021',
    title: 'VeriFL: Communication-Efficient and Fast Verifiable Aggregation for Federated Learning',
    writer: 'Xiaojie Guo, Zheli Liu, Jin Li, Jiqiang Gao, Boyu Hou,  Changyu Dong, and Thar Baker',
    subtitle: 'IEEE Trans. Inf. Forensics Secur., 2021',
    abbr: 'TIFS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/TIFS_20.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1109/TIFS.2020.3043139'
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2021',
    title: 'Searchable Symmetric Encryption with Forward Search Privacy',
    writer: 'Jin Li, Yanyu Huang, Yu Wei, Siyi Lv, Zheli Liu,  Changyu Dong, and Wenjing Lou',
    subtitle: 'IEEE Trans. Dependable Secur. Comput., 2021',
    abbr: 'TDSC',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/TDSC_19.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1109/TDSC.2019.2894411'
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2021',
    title: 'Encryption Switching Service: Securely Switch Your Encrypted Data to Another Format',
    writer: 'Peng Jiang, Jianting Ning, Kaitai Liang,  Changyu Dong, Jiageng Chen, and Zhenfu Cao',
    subtitle: 'IEEE Trans. Serv. Comput., 2021',
    abbr: 'TSC',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/TSC_2018.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1109/TSC.2018.2876849'
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2021',
    title: 'Graph Edit Distance Learning via Modeling Optimum Matchings with Constraints',
    writer: 'Yun Peng, Byron Choi, Jianliang Xu',
    subtitle: 'Proceedings of the International Joint Conferences on Artificial Intelligence (IJCAI), 2021',
    abbr: 'IJCAI',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/ijcai21.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.24963/ijcai.2021/212'
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2021',
    title: 'Hiding Numerical Vectors in Local Private and Shuffled Messages',
    writer: 'Shaowei Wang, Jin Li, Yuqiu Qian, Jiachun Du, Wenqing Lin, Wei Yang',
    subtitle: 'The 30th International Joint Conference on Artificial Intelligence (IJCAI). 2021',
    abbr: 'IJCAI',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/ijcai21b.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.24963/ijcai.2021/510'
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2021',
    title: '',
    writer: '',
    subtitle: '',
    abbr: 'NDSS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/'
      },
      {
        ...TAGS.html,
        url: ''
      }
    ],
    labels: ['label 1', 'label 2']
  },

]