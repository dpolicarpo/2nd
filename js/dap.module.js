export default function Mail(props){
    
    function CopyToClipboard(){
        console.log('copy to clipboard');
    }
    function MouseReveal(){
        console.log('mouse reveal');
    }
    function MailTo(props){
    //function MailTo(){
        console.log(/*props.id*/'Mail To');
    }
    return(
        <div>
            <a onClick={MailTo} href="#">Mail-me</a> &nbsp; <a href="#" onClick={CopyToClipboard} onMouseOver={MouseReveal}>Or click here to copy the e-mail to the clipboard</a>
        </div>
    )

}
