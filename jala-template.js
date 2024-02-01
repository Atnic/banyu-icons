const path = require('path')

function defaultIndexTemplate(filePaths) {
    const exportEntries = filePaths.map(({ path: filePath }) => {
        let basename = path.basename(filePath, path.extname(filePath));
        // const exportName = /^\d/.test(basename) ? `Jala${basename}` : basename
        const exportName = `Jala${basename.replace(/^[-]+|[-]+$/g, '')}`;
        return `export { default as ${exportName} } from './${basename.replace(/^[-]+|[-]+$/g, '')}'`
    })
    return exportEntries.join('\n')
}

module.exports = defaultIndexTemplate