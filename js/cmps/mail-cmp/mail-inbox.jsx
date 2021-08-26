import { MailList } from "./mail-list.jsx";
import { mailService } from "../../services/mail.service.js";

export class MailInbox extends React.Component {
    state = {
        mails: [],
      };
    
      componentDidMount() {
          console.log('from mail inbox')
        this.loadMails();
      }
      
      loadMails = () => {
        mailService.queryMails().then((mails) => {
          this.setState({ mails });
        });
      };

    render() {
        return (
          <MailList mails={this.state.mails} />
        )
    }
  }
  