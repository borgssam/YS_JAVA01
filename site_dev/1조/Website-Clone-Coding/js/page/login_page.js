// 클래스 선언부 start
class LoginPage extends Page{
    
    m_arrHtmlData;
    m_htmlEle;
    
    constructor(data){
        if(data != null){
            let tmpData = new PageData(data);
            super(tmpData);
            this._setData(tmpData);
        }
    }

    // public
    OpenPage(window){
        this._openPage(window);
    }
    // public 

    // private
    _setData(data){
        this.m_arrHtmlData = data.m_arrPageHtml;
        this.m_arrObjEle = new Array();
        this.m_htmlEle = this._createHtml(this.m_arrHtmlData);

    }

    _createHtml(eleData){
        let fragment = document.createDocumentFragment();
        for(let i = 0; i<eleData.length; i++){
            let temp = this._createEle(eleData[i]);
            if(eleData[i].getChild()){
                temp.append(this._createHtml(eleData[i].getChild()))
            }
            fragment.append(temp);
        }
        return fragment;
    }

    _openPage(window){
        window.append(this.m_htmlEle);
    }
    // private

}
// 클래스 선언부 end

window.onload = ()=>{

    const loginPage = new LoginPage(LoginPageData);
    const CONTENT = document.getElementById('content_window');
    loginPage.OpenPage(CONTENT);


};