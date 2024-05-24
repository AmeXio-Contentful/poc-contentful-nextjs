import styles from '@src/components/features/decoupled-components/doormat/doormat.module.scss'
import { Link } from '@src/components/shared/link';

export interface DoormatProps {
  items?: DoormatItem[]
}

export interface DoormatItem {
  title: string,
  children: DoormatItemChild[],
  imageUrl: string,
}

export interface DoormatItemChild {
  title: string,
  url: string,
}
export const DoormatComponent = (props: DoormatProps) => {
  return (
    <div className={styles.doormat_container}>
      <div className={styles.doormat}>
        {props.items && props.items.map(
          (menuItem, index) =>
            menuItem && (
              <div className={styles.doormat__column} key={index}>
                <img className="text-white" src={menuItem.imageUrl}
                     alt={menuItem.title}
                />
                <h3>
                  {menuItem.title}
                </h3>
                {menuItem.children && (
                  <ul>
                    {menuItem.children.map((item, index) => {
                      if (item) {
                        return (
                          <li key={index}>
                            <Link href={item.url} title={item.title}>
                              {item.title}
                            </Link>
                          </li>
                        )
                      }
                    })}
                  </ul>
                )}
              </div>
            ),
        )}
      </div>
    </div>
  )
}
