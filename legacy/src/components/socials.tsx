import * as icons from '@tabler/icons-react'
import socials from '../socials.ts'
import classes from './socials.module.css'

export function Socials () {
    const socialButtons = socials.map((social) => {
        const Component = icons[social.type]
        return <a target="blank" href={social.link}>
            {/* @ts-expect-error */}
            <Component/>
        </a>
    })
    return (
        <div className={classes.socials}>
            {socialButtons}
        </div>
    )
}
