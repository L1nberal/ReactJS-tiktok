import classnames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classnames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-1/355331055_1793094757754146_8359259040784829936_n.jpg?stp=dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=e7XAgnoRtTwAX_tW_3O&_nc_ht=scontent-hkg4-2.xx&oh=00_AfCyA3hHocILBme8BPKYjRYxzYCdNHJB0eoVTzfKLGdLJA&oe=64B0865E"
                alt="username"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Tran Cong Nhat Linh</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>L1nberal</span>
            </div>
        </div>
    );
}

export default AccountItem;
