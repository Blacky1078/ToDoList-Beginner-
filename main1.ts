const usernameData2: { key: String; value: String } | {} = [
  {
    key: "1",
    value: "Shivang",
  },
  {
    key: "2",
    value: "Shivansh",
  },
  {
    key: "3",
    value: "Priyangshu",
  },
  {
    key: "4",
    value: "Varun",
  },
];

const passwordData2: { key: String; value: String } | {} = [
  {
    key: "1p",
    value: "Shivang@123",
  },
  {
    key: "2p",
    value: "Shivansh@123",
  },
  {
    key: "3p",
    value: "Priyangshu@123",
  },
  {
    key: "4p",
    value: "Varun@123",
  },
  
];

for(let i=1;i>=4;i++){
    localStorage.setItem(usernameData2[i],usernameData2[i])
}
for(let i=1;i>=4;i++){
    localStorage.setItem(passwordData2[i],passwordData2[i])
}