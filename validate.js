
String.prototype.validateParam = function(type) {
    
    switch(type){
        case 'mobile':
            var pattern = /^[0-9]{10}$/;
            return pattern.test(this);
            break;
        case 'store_type':
            if(this.length == 0){
                return false;
            }
            break;
        case 'store_name':
            if(this.length == 0){
                return false;
            }
            break;
        case 'email_id': 
            var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            return pattern.test(this);
            break;
        case 'email_otp': 
        case 'mobile_otp': 
            var pattern = /^[0-9]{6}$/;
            return pattern.test(this);
            break;
        case 'pan':
            if(this.length != 10){
                return false;
            }
            break;
        case 'doc_file': 
            if(this == 'image/jpeg' || this == 'image/png' || this == 'image/jpg' || this == 'application/pdf'){
                return true;
            }else{
                return false;
            }
            break;
        case 'doc_id':
            if(isNaN(this)){
                return false;
            }
            break;
        default:
            return false;
        
    }

    return true;
};
