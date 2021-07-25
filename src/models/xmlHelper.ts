export default class XmlHelper {
  // private xmlObj: Document = new Document();

  // private designsDB: Element = this.xmlObj.children[0]; // 使用折中方案骗过编译器

  private xmlObj: Document;

  private designsDB: Element;

  constructor(xmlStr: string) {
    this.xmlObj = new DOMParser().parseFromString(xmlStr, 'text/xml');
    this.designsDB = this.gettDesignsDB() as Element;
  }

  private gettDesignsDB(): Element | undefined {
    const obj = this.xmlObj.getElementsByTagName('DESIGNS_DB');
    for (let i = 0; i < obj.length; i += 1) {
      if (obj[i].tagName === 'DESIGNS_DB') {
        for (let j = 0; j < obj[i].children.length; j += 1) {
          if (obj[i].children[j].tagName === 'VARIABLES') {
            // this.designsDB = obj[i].children[j];
            return obj[i].children[j];
          }
        }
      }
    }
    console.error('🚀 ~ file: xmlHelper.ts ~ line 19 ~ XmlHelper ~ gettDesignsDB ~ DESIGNS_DB: faild');
    return undefined;
  }

  public getXmlObj(): Document {
    return this.xmlObj;
  }

  public getDesignsDB(): Element {
    return this.designsDB;
  }

  public getXmlStr(): string {
    const xmlSer = new XMLSerializer();
    return xmlSer.serializeToString(this.xmlObj);
  }

  public getDesignsDBVar(varName: string): Element | undefined {
    for (let i = 0; i < this.designsDB.children.length; i += 1) {
      if (this.designsDB.children[i].getAttribute('name') === varName) {
        return this.designsDB.children[i];
      }
    }
    return undefined;
  }

  public getDesignsDBVars(varNames: Array<string>): Array<Element> {
    const result: Array<Element> = [];
    for (let i = 0; i < this.designsDB.children.length; i += 1) {
      varNames.forEach((value) => {
        if (this.designsDB.children[i].getAttribute('name') === value) {
          result.push(this.designsDB.children[i]);
        }
      });
    }
    return result;
  }
}
