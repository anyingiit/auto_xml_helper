class xmlHelper {
  private xmlObj: Document = new Object as Document
  private designsDB: Element = new Object as Element
  constructor(xmlStr: string) {
    this.parserXml(xmlStr)
    this.initDesignsDB()
  }
  private parserXml(xmlStr: string) {
    let parser = new DOMParser()
    this.xmlObj = parser.parseFromString(xmlStr, 'text/xml')
  }
  private initDesignsDB() {
    let obj = this.xmlObj.getElementsByTagName('DESIGNS_DB')
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].tagName === 'DESIGNS_DB') {
        for (let j = 0; j < obj[i].children.length; j++) {
          if (obj[i].children[j].tagName === 'VARIABLES') {
            this.designsDB = obj[i].children[j]
          }
        }
      }
    }
  }
  public getXmlObj(): Document {
    return this.xmlObj
  }
  public getDesignsDB(): Element {
    return this.designsDB
  }
  public getXmlStr(): string {
    let xmlSer = new XMLSerializer()
    return xmlSer.serializeToString(this.xmlObj)
  }
  public getDesignsDBVar(varName: string): Element | undefined {
    for (let i = 0; i < this.designsDB.children.length; i++) {
      if (this.designsDB.children[i].getAttribute('name') === varName) {
        return this.designsDB.children[i]
      }
    }
    return undefined
  }
  public getDesignsDBVars(varNames: Array<string>): Array<Element> {
    let result: Array<Element> = []
    for (let i = 0; i < this.designsDB.children.length; i++) {
      varNames.forEach(value => {
        if (this.designsDB.children[i].getAttribute('name') === value) {
          result.push(this.designsDB.children[i])
        }
      })
    }
    return result
  }
}