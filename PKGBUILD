# Maintainer: Hamed Mahmoudkhani <ainyava@gmail.com>
pkgname=ainyava-plasma-configs-git
_destname1="/etc/skel/.config/"
_destname2="/etc/sddm.conf.d/"
_destname3="/etc/xdg/"
pkgver=1.0.0
pkgrel=1
epoch=
pkgdesc="Yavalinux KDE plasma configurations"
arch=('any')
url="https://github.com/yavalinux/ainyava-plasma-configs"
license=('GPL3')
groups=()
depends=()
makedepends=('git')
checkdepends=()
optdepends=()
provides=("$pkgname=$pkgver")
conflicts=("$pkgname")
replaces=()
backup=()
options=()
install=
changelog=
source=("$pkgname::git+$url.git")
noextract=()
sha256sums=('SKIP')
validpgpkeys=()

package() {
	install -dm755 ${pkgdir}${_destname1}
	cp -r  ${srcdir}/${pkgname}${_destname1}* ${pkgdir}${_destname1}

	install -dm755 ${pkgdir}${_destname2}
	cp -r  ${srcdir}/${pkgname}${_destname2}* ${pkgdir}${_destname2}

	install -dm755 ${pkgdir}${_destname3}
	cp -r  ${srcdir}/${pkgname}${_destname3}* ${pkgdir}${_destname3}
}
