let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • pulsa [081284035679]
│ • dana [081284035679]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
